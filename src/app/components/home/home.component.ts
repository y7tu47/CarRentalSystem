import { Component, inject,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CrudApisService } from '../../services/crud-apis.service';
import { Observable } from 'rxjs';
import { ILocation } from '../../model/models';
import { AsyncPipe, NgFor } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [RouterModule, FormsModule, NgFor, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  location: string | undefined;
  crudApi = inject(CrudApisService);
  baseUrl: string = "https://ca5f0d6220a74d744ce4.free.beeceptor.com/";
  locations$: Observable<ILocation> | any;

  constructor() {
    this.locations$ = this.crudApi.getAllData(this.baseUrl+"location");
  }

  ngOnInit(): void {
  }
  
 
}
