import { MusiccComponent } from "./app/componets/musicc/musicc.component";
import { HomeComponent } from "./app/componets/home/home.component";
import { CineComponent } from "./app/componets/cine/cine.component"; 

import { Routes, RouterModule } from "@angular/router";
import { Component, ModuleWithProviders } from "@angular/core";
import { NotfoundComponent } from "./app/componets/notfound/notfound.component";
import { NumerodobleComponent } from "./app/componets/numerodoble/numerodoble.component";
const appRoutes: Routes=[
    {path:"",component:HomeComponent},
    {path:"musica",component:MusiccComponent},
    {path:"cine",component:CineComponent},
    {path:"numeroDoble",component:NumerodobleComponent},
    {path:"numeroDoble/:numero",component:NumerodobleComponent},
    {path:"**",component:NotfoundComponent}
    
]

export const appRoutingProvider: any[]=[];

export const routing:ModuleWithProviders<any>=
RouterModule.forRoot(appRoutes)