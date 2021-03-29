import { Component, OnInit } from '@angular/core';
import { Liste, model } from './model';

@Component({
  selector: 'app-tekyillik',
  templateUrl: './tekyillik.component.html',
  styleUrls: ['./tekyillik.component.css']
})
export class TekyillikComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  
filtre(){
  alert("Filreyi Zaten Başka Ekranda Yaptım");
}
tarim(){
  alert("Tarım Parseli Sorgulandı");
}
destek(){
  alert("Destek Sorgulandı");
}
model=new model();
getListe(){
  return this.model.liste;
}
}
