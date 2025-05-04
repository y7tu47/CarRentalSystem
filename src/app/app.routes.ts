import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarlistComponent } from './components/carlist/carlist.component';
import { AdmincarlistComponent } from './components/admincarlist/admincarlist.component';
import { AdmincarComponent } from './components/admincar/admincar.component';
import { LocationComponent } from './components/location/location.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { BookingComponent } from './components/booking/booking.component';
import { BookinglistComponent } from './components/bookinglist/bookinglist.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'Home',
        pathMatch: 'full'
    },
    {
        path: 'Home',
        component:HomeComponent
    },
    {
        path: 'carList/:location',
        component:CarlistComponent
    },
    {
        path: 'adminCarList',
        component:AdmincarlistComponent
    },
    {
        path: 'adminCar',
        component:AdmincarComponent
    },
    {
        path: 'location',
        component:LocationComponent
    },
    {
        path: 'carDetail/:carId',
        component:CardetailComponent
    },
    {
        path: 'booking',
        component:BookingComponent
    },
    {
        path: 'bookingList',
        component:BookinglistComponent
    },
];
