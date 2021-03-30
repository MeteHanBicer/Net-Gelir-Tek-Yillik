import { Injectable } from '@angular/core';
import { Liste, model } from './tekyillik/model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
model=new model();
  constructor() { }
  getList(){
    return this.model.liste;
  }
  addList(liste:Liste){
    this.model.liste.push(liste);
  }
}
