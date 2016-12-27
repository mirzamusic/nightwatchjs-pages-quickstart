# nightwatchjs-pages-quickstart
Selenium end to end automation tests with NightwatchJS page oriented

## Prepare
1. Download and install [nodeJS](https://nodejs.org) 
2. Download and install [Java](https://java.com/en/download/) 

## Setup and Run
1. Clone this repository and navigate it with terminal
2. enter `npm install`
3. enter `npm run e2e-setup` this will pull a latest Selenium server and chromedriver

    ### For Mac / Ubuntu
    4. enter `node nightwatch -test`
    
    ### For Windows
    4. rename `chromedriver` file in `bin` folder into `chromedriver.exe`
    5. chage line 16 in nightwatch.json file from `"webdriver.chrome.driver": "./bin/chromedriver"` 
       into `"webdriver.chrome.driver": "./bin/chromedriver.exe"`
    6. in terminal enter `node nightwatch.js -test`
