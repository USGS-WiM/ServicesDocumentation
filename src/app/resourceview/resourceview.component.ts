// ------------------------------------------------------------------------------
// ----- resourceview.component -----------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Jeremy K. Newson - USGS Web Informatics and Mapping
// purpose: resource component that shows resource information

import * as L from 'leaflet';
import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { ConfigService } from "../config.service";
import { IConfig } from "../shared/interfaces/IConfig.interface";
import { Iresource } from "../shared/interfaces/IResource.interface";
import { IconfigObj } from "../shared/interfaces/IConfiObj.interface";
import { Iurilist } from "../shared/interfaces/IUrilist.interface";
import { Iparameter } from "../shared/interfaces/IParameter.interface";
import { HttpServices } from "../shared/services/http.service";
import { PathService } from "../shared/services/path.service";
import { Http } from '@angular/http';
import { resolve } from 'url';
import { ILink } from '../shared/interfaces/ILink.interface';


@Component({
  templateUrl: './resourceview.component.html',
  styleUrls: ['./resourceview.component.css']
})
export class ResourceviewComponent implements OnInit {
  //#region Properties and Fields
  private configSettings: IconfigObj; // external assets/config.json

  public Title: string;
  public SelectedResource: Iresource; // the selected resource object
  public SelectedUri: Iurilist; // the selected uri object of the resource
  public ShowWaitCursor: boolean; // spin as resource is gotten
  public RequestResults: any; // response from get request
  
  private _resourceURL:string;
  public get ResourceURL(): string {
    if (this.SelectedUri.uri.startsWith('/')) {
      return this.configSettings.serviceurl + this.SelectedResource.name.toLowerCase() + this.SelectedUri.newURI;
    } else {
      return this.configSettings.serviceurl + this.SelectedUri.newURI;
    };
  }
  private _displayURL:string;
  public get DisplayURL(): string {
    if (this.SelectedUri.uri.startsWith('/')) {
      return this.configSettings.serviceurl + this.SelectedResource.name.toLowerCase() + this._displayURL;
    } else {
      return this.configSettings.serviceurl + this._displayURL;
    };
  }
  private uriParameters:Array<Iparameter>;
  //#endregion
  constructor(private _configService: ConfigService, private _route: ActivatedRoute, private _router: Router, private _httpService: HttpServices,
    private _pathService: PathService, private _cdRef: ChangeDetectorRef, private _http: Http) {
    this.configSettings = this._configService.getConfiguration().configuration;
  }
  //#region NG Lifecycle-hooks
  ngOnInit() {
    this.Title = this.configSettings.title;
    this.RequestResults = null;
    this.ShowWaitCursor = false;   
    this.loadResourcePage();    
  }
  ngAfterViewChecked() {
    this._cdRef.detectChanges();
  }
  //#endregion
  //#region Methods
  public UpdateUri() {
    let qparam = this.uriParameters.filter(p => (p.required || p.value)).map(p=>p.name + '={' + p.name + '}'); 
    //removes trailing / if present.
    this._displayURL = this.SelectedUri.uri.replace(/\/$/, '');
    
    if(qparam.length>0)
      this._displayURL +="?"+ qparam.join('&')  

    //must look at parameterlistvalues and url -> search and replace
    let inputParams: any = null;
    this.RequestResults = undefined; 
    if (this.SelectedUri.parameters) {
      inputParams = {};
      this.SelectedUri.parameters.forEach(p =>
        inputParams[p.name] = p.value
      );
    }//endif

    this.SelectedUri.newURI = this.formatString(this._displayURL, inputParams);
  }
  public LoadResponse() {
    this.ShowWaitCursor = true;

    this._httpService.getEntities(this.ResourceURL).subscribe((response) => {
      this.ShowWaitCursor = false;
      this.RequestResults = response;      
    }, (error) => {
      this.RequestResults = "(" + error.status + ") " + error.statusText;
      this.ShowWaitCursor = false;
    })
  }
  public GetLinkPath(link: ILink):String {
    //returns a relativepath to link
    //rel attribute specifies the relationship between the current document and the linked document/resource
    //href Specifies the location of the linked document
    return ("./#/"+link.href + '/' + link.method + '/' + link.rel).replace(/ /g, '');
  }
  //#endregion
  //#region Helper Methods
  private loadResourcePage(){
    this._route.url.subscribe((urlSeg) => {    
      //get the selected resource
      this.SelectedResource = this.configSettings.resources.filter(res => { return res.name.replace(/ /g, '') == urlSeg[0].path })[0]; 

      if (!this.SelectedResource) {this._router.navigate(['notFound']); return;}

      this._pathService.setpath(this.SelectedResource.name.replace(/ /g, ''));
      

      this.SelectedResource.methods.forEach((method) => {
        if (method.type == urlSeg[1].path) {
          method.uriList.forEach((uri) => {
            if (uri.name.replace(/ /g, '') == urlSeg[2].path) {
              this.SelectedUri = uri;
              this.loadUriParameters();
              this.UpdateUri();
            }//endif
          });
        }//endif
      });//next method
      if (!this.SelectedUri)
        this._router.navigate(['notFound']);
      
    });
  }
  private loadUriParameters(){    
    let rg = /[^{\}]+(?=})/g;
    let uriParams:Array<string> = rg.exec(this.SelectedUri.uri);
    if(uriParams==null) uriParams =[];
    if (!this.SelectedUri.parameters ) {this.uriParameters =[]; return}
    let inParams = this.SelectedUri.parameters;
    
    this.uriParameters = this.SelectedUri.parameters.filter((p)=>(uriParams.indexOf(p.name)==-1));
  }
  private formatString(uri, inputs): string {
    let formattedURI: string = "";
    var args = inputs;
    var newstring = uri.replace(/{[a-zA-Z0-9_]+}/g, function (match, number) {
      return typeof args[match.slice(1, -1)] != 'undefined' ? args[match.slice(1, -1)] : match;
    });
    return newstring;
  }
  //#endregion
}

