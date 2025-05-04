import { Component, inject, OnInit } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ILocation } from '../../model/models';
import { DataService } from '../../services/data.service';
import { CrudApisService } from '../../services/crud-apis.service';

@Component({
  selector: 'app-location',
  imports: [ReactiveFormsModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent  implements OnInit{
 
  dataService = inject(DataService);
  apiService = inject(CrudApisService);
  locationForm: FormGroup = new FormGroup({});
  locationData: ILocation = this.dataService.getData(); 
  baseUrl: string = "https://ca5f0d6220a74d744ce4.free.beeceptor.com/";
  locations: ILocation[] = [];

  ngOnInit(): void {
    this.intializelocationFormGroup();
  }

  intializelocationFormGroup() {
    // console.log(this.locationData)
    this.locationForm =new FormGroup({
      locationId: new FormControl(this.locationData?.locationId),
      city: new FormControl(this.locationData?.city),
      title: new FormControl(this.locationData?.title),
      pincode: new FormControl(this.locationData?.pincode)
    });

    this.dataService.setData({
      locationId: "",
      city: "",
      title: "",
      pincode:""
    });  
}

createLocation() {
  this.apiService.create(this.baseUrl+"location", this.locationForm.value).subscribe(response => {
    console.log(response);
  });
} 

addLocation() {
  this.locations?.push(this.locationForm.value);
  console.log(this.locations);
  this.intializelocationFormGroup();
}

}
