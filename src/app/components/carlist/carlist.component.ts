import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudApisService } from '../../services/crud-apis.service';
import { Observable } from 'rxjs';
import { ICar } from '../../model/models';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-carlist',
  imports: [NgFor, RouterModule],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  crudeApis = inject(CrudApisService);
  baseUrl: string = "https://ca5f0d6220a74d744ce4.free.beeceptor.com/car/";
  // carsList: Observable<any> | undefined;
  locationId: number | any;
  availableCars: ICar[] = [];
  

  ngOnInit(): void {
    this.locationId = this.activatedRoute.snapshot.paramMap.get('location');
    this.getCarsByLocationId();
  }

  getCarsByLocationId() {
    this.crudeApis.getAllData(this.baseUrl).subscribe(response => {
      this.availableCars = response.filter((car: ICar) => car.locationId === this.locationId);
      console.log(this.availableCars);
    });
  }

  // viewCarDetail(id: number) {

  // }


}
