import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './main/cars/cars.component';
import { AppComponent } from './app.component';
import { CustomersComponent } from './main/customers/customers.component';
import { MainComponent } from './main/main.component';
import { CarDetailComponent } from './main/cars/car-detail/car-detail.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'cars', component: CarsComponent, children: [
      { path: ':id', component: CarDetailComponent },]
  },
  { path: 'customers', component: CustomersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
