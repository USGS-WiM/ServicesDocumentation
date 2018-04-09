// ------------------------------------------------------------------------------
// ----- Iparameter.interface.ts -----------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: interface for the settings/config.json configuration.resources[i].methods.uriList[i].parameters[i]
import { ILink } from "./ILink.interface";

export interface Iparameter {
    name: string;
    description: string;
    type: string;
    required?: boolean;
    link?: ILink;  
    value: string;    
}