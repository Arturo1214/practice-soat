import { Component, OnInit } from '@angular/core';
import {City, PurchaseType, Soat, TypeUse, TypeVehicle, User} from '../_models/index';
import {CityService, SoatService, TypeUseService, TypeVehicleService, PurchaseTypeService, UserService} from '../_services/index';

@Component({
  selector: 'app-soat',
  templateUrl: './soat.component.html',
  styleUrls: ['./soat.component.css']
})
export class SoatComponent implements OnInit {
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

  constructor(private soatService: SoatService,
              private cityService: CityService,
              private typeUseService: TypeUseService,
              private typeVehicleService: TypeVehicleService,
              private purchaseTypeService: PurchaseTypeService,
              private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.soat = new Soat();
    this.error = '';
    this.showViewCreate = false;
    this.soatService.allItems().subscribe(_soats => {
      this.soats = _soats;
      console.log('sotas');
      console.log(this.soats);
    });

    this.userService.find(this.currentUser.username)
      .subscribe((_user) => {
        this.user = _user;
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

  loadSoat() {
    this.soats = new Array<Soat>();
    this.soatService.allItems().subscribe(_soats => {
      this.soats = _soats;
      console.log('sotas');
      console.log(this.soats);
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

}
