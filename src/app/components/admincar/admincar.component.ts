import { Component, inject, OnInit } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ICar } from '../../model/models';
import { DataService } from '../../services/data.service';
import { CrudApisService } from '../../services/crud-apis.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admincar',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './admincar.component.html',
  styleUrl: './admincar.component.css'
})
export class AdmincarComponent implements OnInit{
 
  dataService = inject(DataService);
  apiService = inject(CrudApisService);
  carForm: FormGroup = new FormGroup({});
  carData: ICar = this.dataService.getData(); 
  baseUrl: string = "https://ca5f0d6220a74d744ce4.free.beeceptor.com/";

  ngOnInit(): void {
    this.intializecarFormGroup();
  }

  intializecarFormGroup() {
    // console.log(this.carData)
    this.carForm =new FormGroup({
      carId: new FormControl(this.carData?.carId),
      brand: new FormControl(this.carData?.brand ),
      name: new FormControl(this.carData?.name ),
      pricing: new FormControl(this.carData?.pricing ),
      locationId: new FormControl(this.carData?.locationId),
      registeredOn: new FormControl(this.carData?.registeredOn ),
      vehicleNo: new FormControl(this.carData?.vehicleNo ),
      ownerUserId: new FormControl(this.carData?.ownerUserId)
    });

    this.dataService.setData({
      carId: "",
      brand: "",
      name: "",
      pricing: 0,
      locationId: "",
      registeredOn: "",
      vehicleNo: "",
      ownerUserId: ""
    });  
}

createCar() {
  this.apiService.create(this.baseUrl+"car", this.carForm.value).subscribe(response => {
    console.log(response);
  });

  this.apiService.getAllData(this.baseUrl+"car").subscribe(response => {
    console.log(response);
  });
}
}
