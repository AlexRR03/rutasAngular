import { Routes, RouterModule } from "@angular/router";
import { Component, ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./app/componets/home/home.component";
import {TablamultiplicarComponent} from './app/componets/tablamultiplicar/tablamultiplicar.component'


const appRoutes: Routes=[
    { path:"",component:HomeComponent },
    { path:"tablamultiplicar/:numero", component:TablamultiplicarComponent}
];
export const appRoutingProvider: any[]=[];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes)