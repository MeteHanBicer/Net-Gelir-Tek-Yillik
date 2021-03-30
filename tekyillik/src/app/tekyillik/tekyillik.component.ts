import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Liste, model } from './model';

@Component({
  selector: 'app-tekyillik',
  templateUrl: './tekyillik.component.html',
  styleUrls: ['./tekyillik.component.css']
})

export class TekyillikComponent implements OnInit {
selectedList : Liste;
@Input()  liste:Liste;
  constructor(private service:ServiceService) { }

  ngOnInit() {
  }

onSelectList(liste:Liste){
  this.selectedList = liste;
}

  getliste(): Liste[]{
return this.service.getList();
  }
  delete(liste : Liste){
this.service.delete(liste);
this.ngOnInit();
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
add(il:string,ilce:string,mahalle:string,ada:number,parsel:number,nitelik:string,taupualani:number,yil:string,gelir:number,kuru:string){
alert(il+ilce+mahalle+ada+parsel+nitelik);
const p = new Liste(il,ilce,mahalle,ada,parsel,nitelik,taupualani,gelir,yil,kuru);
this.service.addList(p);

}
}