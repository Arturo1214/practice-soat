import { Component, OnInit } from '@angular/core';
import {City, Soat, TypeUse, TypeVehicle} from '../_models/index';
import {CityService, SoatService, TypeUseService, TypeVehicleService} from '../_services/index';

@Component({
  selector: 'app-soat',
  templateUrl: './soat.component.html',
  styleUrls: ['./soat.component.css']
})
export class SoatComponent implements OnInit {
  soat: Soat;
  cities: City[];
  typeUses: TypeUse[];
  typeVehicles: TypeVehicle[];
  constructor(private soatService: SoatService,
              private cityService: CityService,
              private typeUseService: TypeUseService,
              private typeVehicleService: TypeVehicleService) { }

  ngOnInit() {
    this.cities = [];
    this.typeUses = [];
    this.typeVehicles = [];
    this.cityService.allItems().subscribe(_cities => {
      this.cities = _cities;
    });

    this.typeUseService.allItems().subscribe(_typeUses => {
      this.typeUses = _typeUses;
    });

    this.typeVehicleService.allItems().subscribe(_typeVehicles => {
      this.typeVehicles = _typeVehicles;
    })
  }

}
