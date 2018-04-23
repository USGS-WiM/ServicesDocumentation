// ------------------------------------------------------------------------------
// ----- homeview.component -----------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick Web Informatics and Mapping
//           Jeremy K. Newson - USGS Web Informatics and Mapping
// purpose: home component that shows home page and resource information

import * as L from 'leaflet';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../config.service";
import { IconfigObj } from "../shared/interfaces/IConfiObj.interface";

@Component({
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css']
})
export class HomeviewComponent implements OnInit {
  //#region Properties and Fields
  public title: string;
  public configSettings: IconfigObj; // external assets/config.json
  public hometemplate: string;
  //#endregion
  constructor(private _configService: ConfigService) {
    this.configSettings = this._configService.getConfiguration().configuration;
  }
  //#region NG Lifecycle-hooks
  ngOnInit() {
    this.title = this.configSettings.title;
    this.hometemplate = this.configSettings.homepage;
  }
}
