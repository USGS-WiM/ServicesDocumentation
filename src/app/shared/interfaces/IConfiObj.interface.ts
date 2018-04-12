// ------------------------------------------------------------------------------
// ----- IconfigObj.interface.ts -----------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Web Informatics and Mapping
//           Jeremy K. Newson - USGS Web Informatics and Mapping
// purpose: interface for the settings/config.json configuration

import { Iresource } from "./IResource.interface";
import { Observable } from "rxjs/Observable";

export interface IconfigObj {
    title:string;
    apiConfig:string;
    serviceurl:string;
    resources: Array<Iresource>;
    homepage:string;
}