// ------------------------------------------------------------------------------
// ----- config.service..ts -----------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: service to get configuration file

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { IConfig } from "./shared/interfaces/IConfig.interface";
import 'rxjs/add/operator/map';
import { resolve } from 'url';
import { error } from 'util';

@Injectable()
export class ConfigService {
   private config: IConfig;
   constructor(private _http:Http) {}
  
    public load(url:string) { 
        return new Promise((resolve) => {
            this._http.get(url).map(res=>res.json()).subscribe(config => {
                this.config = config;                     
                
                this._http.get(this.config.configuration.apiConfig).map(res=> res.json())
                .subscribe(res => {
                    this.config.configuration.resources = res;
                    resolve();     
                });                   
            });
        })
    }

    public getConfiguration():IConfig {
        return this.config;
    }
}