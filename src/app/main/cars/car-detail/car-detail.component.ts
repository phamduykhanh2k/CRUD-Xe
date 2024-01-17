import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/models/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: Car | undefined;

  updateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(0),
  });

  // Inject
  constructor(private route: ActivatedRoute, private carService: CarService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const car = this.carService.findCarById(id);
      this.car = car;
      this.updateForm.setValue({ ...car! });
    })

    // this.carService.carEmit.subscribe(car => this.car = car);
  }
  onUpdate = (id: string) => {
    const car = this.carService.update(id, this.updateForm.value);
    this.car = car;
  }

  onDelete = (id: string) => {
    this.carService.delete(id);
    this.car = undefined;
  }

}
