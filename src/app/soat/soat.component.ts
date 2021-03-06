import { Component, OnInit } from '@angular/core';
import {City, PurchaseType, Soat, TypeUse, TypeVehicle, User} from '../_models/index';
import { saveAs } from 'file-saver/FileSaver';
import {CityService, SoatService, TypeUseService, TypeVehicleService, PurchaseTypeService, UserService} from '../_services/index';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-soat',
  templateUrl: './soat.component.html',
  styleUrls: ['./soat.component.css']
})
export class SoatComponent implements OnInit {
  public filter: string;
  public showViewCreate: Boolean;
  public error: string;
  public user: User;
  public currentUser;
  public soat: Soat;
  public soats: Array<Soat>;
  public cities: Array<City>;
  public typeUses: Array<TypeUse>;
  public typeVehicles: Array<TypeVehicle>;
  public purchaseTypes: Array<PurchaseType>;

  public page;
  public collectionSize;
  public pageSize: any;



  constructor(private soatService: SoatService,
              private cityService: CityService,
              private typeUseService: TypeUseService,
              private typeVehicleService: TypeVehicleService,
              private purchaseTypeService: PurchaseTypeService,
              private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.page = 1;
    this.collectionSize = 0;
    this.soat = new Soat();
    this.error = '';
    this.showViewCreate = false;
    this.pageSize = 2;
    this.filter = '';

    this.userService.find(this.currentUser.username)
      .subscribe((_user) => {
        this.user = _user;
        this.loadSoat();
    });

    this.cityService.allItems().subscribe(_cities => {
      this.cities = _cities;
    });

    this.typeUseService.allItems().subscribe(_typeUses => {
      this.typeUses = _typeUses;
    });

    this.typeVehicleService.allItems().subscribe(_typeVehicles => {
      this.typeVehicles = _typeVehicles;
    });

    this.purchaseTypeService.allItems().subscribe(_purchaseTypes => {
      this.purchaseTypes = _purchaseTypes;
    });


  }



  save() {
    console.log(this.soat);
    this.soat.user = this.user;
    if (this.soat.id !== null) {
      this.soatService.update(this.soat).subscribe(response => console.log(response));
    } else {
      this.soatService.create(this.soat)
        .subscribe(
          response => {
              console.log(response);
              this.clear();
              this.loadSoat();
            },
          err => {
            const licensePlate = 'licenseplateexists';
            const errorKey = err.headers.get('X-interviewSoatApp-errorkey');
            console.log(errorKey);
            if (errorKey === licensePlate) {
              this.error = `ESTA PLACA {${this.soat.licensePlate}} YA CUENTA CON SOAT`;
            } else {
              this.error = 'Error al intentar guardar';
            }
          });
    }
  }

  newSoat() {
    this.soat = new Soat();
    this.showViewCreate = true;
    this.error = '';
  }

  clear() {
    this.soat = new Soat();
    this.error = '';
    this.showViewCreate = false;
  }

  trackIdentity(index, item: Soat) {
    return item.id;
  }

  downloadVoucher(id: any) {
    this.soatService.voucher(id)
      .subscribe(result => {
        saveAs(result, `voucher${id}.pdf`);
      });
  }

  loadPage(page: number) {
    this.page = page;
    if (this.filter) {
      this.filterMaster();
    } else {
      this.loadSoat();
    }
  }

  loadSoat() {
    this.soats = new Array<Soat>();
    const params = new HttpParams()
      .set('userId.equals', `${this.user.id}`)
      .set('page', `${this.page - 1}`)
      .set('size', `${this.pageSize}`);
    this.soatService.allItems(params).subscribe(_soats => {
      this.collectionSize = _soats.headers.get('X-Total-Count');
      this.soats = _soats.body;
    });
  }

  actionFilter() {
    console.log(this.filter);
    this.page = 1;
    this.filterMaster();
  }

  actionFilterClear() {
    this.filter = '';
    this.actionFilter();
  }

  private filterMaster() {
    let params: any;
    if (this.filter) {
      console.log('filter con valor');
      params = new HttpParams()
        .set('userId.equals', `${this.user.id}`)
        .set('page', `${this.page - 1}`)
        .set('size', `${this.pageSize}`)
        .set('licensePlate.contains', `${this.filter}`);
    } else {
      params = new HttpParams()
        .set('userId.equals', `${this.user.id}`)
        .set('page', `${this.page - 1}`)
        .set('size', `${this.pageSize}`);
      console.log('filter vacio');
    }
    console.log(params);
    this.soatService.allItems(params).subscribe(_soats => {
      this.collectionSize = _soats.headers.get('X-Total-Count');
      this.soats = _soats.body;
    });
  }
}
