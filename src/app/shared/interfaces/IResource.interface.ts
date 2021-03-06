// ------------------------------------------------------------------------------
// ----- IResource.interface.ts -----------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Web Informatics and Mapping
//           Jeremy K. Newson - USGS Web Informatics and Mapping
// purpose: interface for the settings/config.json configuration.resources[i]

import { Imethods } from "./IMethod.interface";

export interface Iresource {
    name: string;
    description: string;
    methods: Array<Imethods>;
}