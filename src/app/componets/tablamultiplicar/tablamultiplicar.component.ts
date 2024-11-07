import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css'
})
export class TablamultiplicarComponent implements OnInit {
    public numero!: number 
    public tabla: Array<number> = []
    
    constructor( private _activeRoute: ActivatedRoute){}

    ngOnInit():void{
      this.tabla=[]
      let aux : Array<number>=[]
      this._activeRoute.params.subscribe((parametro:Params)=>{
          if (parametro['numero']!=null){
            this.numero = parseInt(parametro['numero'])
            for (let i = 0; i <=10; i++) {
              let resultado = this.numero*i
              aux.push(resultado)                     
            }
            this.tabla = aux
            // console.log(this.tabla)     
          }
      })
    }

   
}
