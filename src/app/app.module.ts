import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//IMPORTS DE LAS RUTAS
import { routing, appRoutingProvider } from '../tablaMultiplicar.routing';
//IMPORTS DE LOS COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component'; 
import { MusiccComponent } from './componets/musicc/musicc.component'; 
import { CineComponent } from './componets/cine/cine.component'; 
import { MenuComponent } from './componets/menu/menu.component';
import { NotfoundComponent } from './componets/notfound/notfound.component';
import { NumerodobleComponent } from './componets/numerodoble/numerodoble.component';
import { TablamultiplicarComponent } from './componets/tablamultiplicar/tablamultiplicar.component';
import { MenutablamultiplicarComponent } from './componets/menutablamultiplicar/menutablamultiplicar.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusiccComponent,
    CineComponent,
    MenuComponent,
    NotfoundComponent,
    NumerodobleComponent,
    TablamultiplicarComponent,
    MenutablamultiplicarComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
