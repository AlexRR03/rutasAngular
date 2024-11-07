import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//IMPORTS DE LAS RUTAS
import { routing, appRoutingProvider } from '../app.routing';
//IMPORTS DE LOS COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component'; 
import { MusiccComponent } from './componets/musicc/musicc.component'; 
import { CineComponent } from './componets/cine/cine.component'; 
import { MenuComponent } from './componets/menu/menu.component';
import { NotfoundComponent } from './componets/notfound/notfound.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusiccComponent,
    CineComponent,
    MenuComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
