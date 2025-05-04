import { Component, inject, OnInit } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IBooking } from '../../model/models';
import { DataService } from '../../services/data.service';
import { CrudApisService } from '../../services/crud-apis.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-booking',
  imports: [ ReactiveFormsModule, NgFor ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{

  dataService = inject(DataService);
  apiService = inject(CrudApisService);
  bookingForm: FormGroup = new FormGroup({});
  bookingData: IBooking = this.dataService.getData();
  baseUrl: string = "https://ca5f0d6220a74d744ce4.free.beeceptor.com/";

  ngOnInit(): void {
    this.intializeBookingFormGroup();
  }

  intializeBookingFormGroup() {
    // console.log(this.bookingData)
    this.bookingForm =new FormGroup({
      bookingId: new FormControl(this.bookingData?.bookingId),
      customerId: new FormControl(this.bookingData?.customerId ),
      fromLocationId: new FormControl(this.bookingData?.fromLocationId),
      toLocationId: new FormControl(this.bookingData?.toLocationId),
      travelDate: new FormControl(this.bookingData?.travelDate),
      startTime: new FormControl(this.bookingData?.startTime),
      carId: new FormControl(this.bookingData?.carId),
      pickupAddress: new FormControl(this.bookingData?.pickupAddress),
      alternateContactNo: new FormControl(this.bookingData?.alternateContactNo),
      invoiceNo: new FormControl(this.bookingData?.invoiceNo),
      isComplete: new FormControl(this.bookingData?.isComplete)
    });

    this.dataService.setData({
      bookingId: "",
      customerId: "",
      fromLocationId: "",
      toLocationId: "",
      travelDate: "",
      startTime: "",
      carId: "",
      pickupAddress: "",
      alternateContactNo: "",
      invoiceNo: "",
      isComplete: false
    });  
}

createbooking() {
  this.apiService.create(this.baseUrl+"booking", this.bookingForm.value).subscribe(response => {
    console.log(response);
  });
}
}
