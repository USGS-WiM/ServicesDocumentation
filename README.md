![WiM](wimlogo.png)

# Services Documentation

REST Services documentation template for use with any WIM services documentation.

### Prerequisites

This project has dependencies that require [Node 6.9.0] (https://nodejs.org/en/) or higher, which includes NPM 3 or higher, and Angular CLI.

```
npm install -g @angular/cli
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

https://help.github.com/articles/cloning-a-repository/

* Run `npm install`. 

## Configuration

The config.json located in the assets folder can be adapted to change the sidebar Accordion Titles and contents. URL Routing is dynamically created based on these two properties. The Home page must be also custom configured for each REST Services Documenation application. 

## Configuration file structure
config.json directs the services documentation api to the proper location of services, service api and homepage markup location.

```"copyright": "2017 WIM - USGS",
"author": "Author - USGS Web Informatics and Mapping", 
"purpose": "sample services external config file for documentation.",
"configuration": {
    "title":"Sample Web Services",
    "serviceurl":"https://test.sample.usgs.gov/sampleservices/",
    "apiConfig":"https://test.sample.usgs.gov/sampleservices/apiconfig",        
    "homepage":"https://test.sample.usgs.gov/sampleservices/Introduction.md"
}
```

### serviceurl
Base URL path location of REST services.
	
### apiConfig
Path to services configuration json file.
The service configureation json file contains a summary of the service endpoints, available endpoint method, and description of method uri's. Below is a sample of apiConfig.json file that the service documentation api has been adapted to read.

Note: _Resource and method descriptions are referenced by either a hyperlink markdown page or brief string description. Both methods are implemented by use of a key value pair as shown in the following example below._

```
[  
   {  
      "name":"Sample",
      "description":{"string":"Service documentation sample config "},
      "methods":[  
         {  
            "type":"GET",
            "uriList":[  
               {  
                  "name":"Sample Resources",
                  "uri":"/",
                  "description":{"link":"https://linkToDescriptionMarkDownPage.md"}
               },
               {  
                  "name":"Sample Resource",
                  "uri":"/{ID}",
                  "description":{"string":"Sample resource description string"},
                  "parameters":[  
                     {  
                        "name":"ID",
                        "description":"Unique Sample resource identifier",
                        "type":"Number"
                     }
                  ]
               }
            ]
         }
      ]
   }
]
```


### homepage
Path to services summary markup file that is used as the service documentation homepage. See [basic-writing-and-formatting-syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/) for more help.

## Building and testing

Run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment

Run `ng build -prod --baseHref` to build a deployed project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build, and --baseHref to set the base tag to <base href="">.

see [CLI build](https://github.com/angular/angular-cli/wiki/build) for additional options.

## Migrating to latest CLI

Migrating to the latest version of angular cli can be accomplished by referencing the [angular-update-guide](https://angular-update-guide.firebaseapp.com/)

```
npm install typescript@2.4 --save-dev

npm install @angular/common@latest @angular/compiler@latest @angular/compiler-cli@latest @angular/core@latest @angular/forms@latest @angular/http@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/platform-server@latest @angular/router@latest @angular/animations@latest --save
```

## Authors

* **[Jeremy Newson](https://www.usgs.gov/staff-profiles/jeremy-k-newson)**  - *Lead Developer* - [USGS Web Informatics & Mapping](https://wim.usgs.gov/)
* **[Tonia Roddick](https://github.com/troddick)**  - *Developer*

See also the list of [contributors](../../graphs/contributors) who participated in this project.

## License

This project is licensed under the Creative Commons CC0 1.0 Universal License - see the [LICENSE.md](LICENSE.md) file for details

## Suggested Citation

In the spirit of open source, please cite any re-use of the source code stored in this repository. Below is the suggested citation:

`This project contains code produced by the Web Informatics and Mapping (WIM) team at the United States Geological Survey (USGS). As a work of the United States Government, this project is in the public domain within the United States. https://wim.usgs.gov`


## About WIM

* This project authored by the [USGS WIM team](https://wim.usgs.gov)
* WIM is a team of developers and technologists who build and manage tools, software, web services, and databases to support USGS science and other federal government cooperators.
* WiM is a part of the [Upper Midwest Water Science Center](https://www.usgs.gov/centers/wisconsin-water-science-center).
