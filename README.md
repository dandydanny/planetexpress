# PlanetExpress
![alt text](https://raw.githubusercontent.com/dandydanny/planetexpress/master/planetexpress_readme_screenshot.png "PlanetExpress Screenshot")

Quick 'n' dirty UI to POST parameters to start Futurama, an internal testing tool

### How to Use:
1. Clone repo, copy files to ```/futurama/src/main/webapp```
1. Start Futurama by issuing ```mvn spring-boot:run``` in terminal
1. Navigate to ```http://localhost:9090/futurama/planetexpress/index.html```
1. Modify the provided JSON to suit your style
 1. flightModel: ```[RANDOM, PLAYBACK, SMOOTHING]```
 1. lob: ```[LIVE, VIVA, POLITICS16]```
 1. targetUUID: ```<flight_uuid>```
 1. providerToken: ```[pnt, ssipol, ...]```
 1. flightDomain: ```[qa, qacore, stage]```
 1. smoothingFile: ```./src/main/resources/<name_of_smoothing_file>.csv```
1. Hit ```SEND```

### To Do:
1. Wire-up ```RESET``` button
1. Persistent storage for JSON
1. Implement automatic flight info retrieval from Survey Master
1. Random quotes from Professor Farnsworth ;)
