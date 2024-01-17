import { EventEmitter, Injectable } from '@angular/core';
import { Car, ICar } from 'src/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  // Model
  // carEmit = new EventEmitter<ICar>();
  // Dữ liệu - Database
  private cars: ICar[] = [
    new Car('C1', 'Exciter', 20000000),
    new Car('C2', 'Winner', 40000000),
    new Car('C3', 'Honda', 3000000)
  ]

  constructor() { }

  getAll = () => {
    return this.cars;
  }

  findCarById = (id: string) => {
    return this.cars.find(car => car.id === id);
  }

  create = (id: string, name: string, price: number) => {
    let car = new Car(id, name, price);
    this.cars.push(car);
  }

  update = (id: string, data: any) => {
    let index = this.cars.findIndex(car => car.id === id)!;
    this.cars[index] = data;
    return this.cars[index];
  }

  delete = (id: string) => {
    let index = this.cars.findIndex(car => car.id === id)!;
    this.cars.splice(index, 1);
  }
}
