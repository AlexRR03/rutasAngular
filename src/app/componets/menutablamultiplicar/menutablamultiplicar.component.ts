import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menutablamultiplicar',
  templateUrl: './menutablamultiplicar.component.html',
  styleUrl: './menutablamultiplicar.component.css'
})
export class MenutablamultiplicarComponent implements OnInit{
  public numeroRandom: number = 0
  public listaNumeros: Array<number> = []
  ngOnInit():void{
    this.listaNumeros = []
    for (let i = 0; i <= 5; i++) {
      this.numeroRandom = Math.floor(Math.random()*(99-1)+1)
      this.listaNumeros.push(this.numeroRandom)
    }
      


   }
}
