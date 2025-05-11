import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudApisService } from '../../services/crud-apis.service';
import { ICar } from '../../model/models';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-cardetail',
  imports: [NgIf, AsyncPipe],
  templateUrl: './cardetail.component.html',
  styleUrl: './cardetail.component.css'
})
export class CardetailComponent implements OnInit {

  carId: number | any;
  activatedRoute = inject(ActivatedRoute);
  crudeApis = inject(CrudApisService);
  baseUrl: string = "https://ca5f0d6220a74d744ce4.free.beeceptor.com/";
  car: number| any;
  city: string | any;


  ngOnInit(): void {
    this.carId = this.activatedRoute.snapshot.paramMap.get('carId');
    // this.crudeApis.getDataById(this.baseUrl+"car/"+this.carId).subscribe(response => {
    //   this.car = response;
    //   this.crudeApis.getDataById(this.baseUrl+"location/"+this.car.locationId).subscribe(response => {
    //     this.city = response.city;
    //     console.log(response.city)
    //   })
      
    // }) 
     
    
  }

}
