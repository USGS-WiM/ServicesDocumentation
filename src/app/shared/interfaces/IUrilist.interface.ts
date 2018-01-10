// ------------------------------------------------------------------------------
// ----- IUrilist.interface.ts -----------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: interface for the settings/config.json configuration.resources[i].methods.uriList

import { Iparameter } from "./IParameter.interface";

export interface Iurilist {
    name: string;
    uri: string;
    description: string;    
    parameters: Array<Iparameter>;
    body: Array<Iparameter>;
    showMap?: boolean;
    newURL: string;
    availableMedia: Array<string>;
    selectedMedia: string;
}