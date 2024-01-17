import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Car, ICar } from 'src/models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  //Controller

  cars: ICar[] = [];
  isOpenCreate = false;

  createForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(0),
  });

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.cars = this.carService.getAll();
  }

  onOpenCreate = () => {
    if (this.isOpenCreate) {
      //Đóng Form
      this.isOpenCreate = false
    } else {
      // Hiển thị form
      this.isOpenCreate = true;
    }
  }

  onCreate = () => {
    let { id, name, price } = this.createForm.value;

    this.carService.create(id!, name!, price!);
  }
}
