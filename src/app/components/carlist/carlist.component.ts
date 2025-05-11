import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudApisService } from '../../services/crud-apis.service';
import { ICar } from '../../model/models';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';




@Component({
  selector: 'app-carlist',
  imports: [NgFor, RouterModule, NgIf, MatInputModule],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  crudeApis = inject(CrudApisService);
  baseUrl: string = "https://cab96ea27a8fc98e7ea5.free.beeceptor.com/car/";
  // carsList: Observable<any> | undefined;
  locationId: number | any;
  availableCars: ICar[] = [];
  categories: string[] = ["Recomended", "Price (lowest price)", "Top reveiwed", "Distance"];
  selectedCategory: string | undefined;
  sortBtnClicked: boolean = false;
  carTypes: string[] = ["Small", "Meduim", "Larg", "SUVs", "Minivan", "premuim"];
  carsAvailableNumber: number = 0;

  ngOnInit(): void {
    this.locationId = this.activatedRoute.snapshot.paramMap.get('location');
    this.getCarsByLocationId();
  }

  getCarsByLocationId() {
    this.crudeApis.getAllData(this.baseUrl).subscribe(response => {
      console.log(response)
      this.availableCars = response.filter((car: ICar) => car.locationId === this.locationId);
      console.log(this.availableCars);
      this.carsAvailableNumber = 0;
      this.availableCars.forEach(() => {
        this.carsAvailableNumber++;
      })
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  isSortBtnClicked() {
    this.sortBtnClicked = !this.sortBtnClicked;
  }


}
