// ------------------------------------------------------------------------------
// ----- Config.interface.ts -----------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Web Informatics and Mapping
//           Jeremy K. Newson - USGS Web Informatics and Mapping
// purpose: interface for the externally referenced config file settings/config.json configuration

import { IconfigObj } from "./IConfiObj.interface";

export interface IConfig {
    configuration: IconfigObj;    
}