// ------------------------------------------------------------------------------
// ----- Imethod.interface.ts -----------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Web Informatics and Mapping
//           Jeremy K. Newson - USGS Web Informatics and Mapping
// purpose: interface for the settings/config.json configuration.resources[i].methods

import { Iurilist } from "./IUrilist.interface";

export interface Imethods {
    type: string;
    uriList: Array<Iurilist>;
}