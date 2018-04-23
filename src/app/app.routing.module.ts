// ------------------------------------------------------------------------------
// -------- app.routing.module --------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Web Informatics and Mapping
//           Jeremy K. Newson - USGS Web Informatics and Mapping
// purpose: routes for the resource clicked

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { ConfigService } from "./config.service";
import { environment } from "../environments/environment";
import { IconfigObj } from "./shared/interfaces/IConfiObj.interface";
import { PageNotFoundComponent } from "./not-found/not-found.component";
import { ResourceviewComponent } from './resourceview/resourceview.component';
import { HomeviewComponent } from "./homeview/homeview.component";

const appRoutes: Routes = [ 
    {
        path: '',         
        component: HomeviewComponent
    },    
    {
        path: '**',
        component: ResourceviewComponent
    },
    {
        path: 'notFound',
        component: PageNotFoundComponent,
        pathMatch: 'full'
    }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes, {useHash:true}); // implements /#/
