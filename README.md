# nightwatchjs-pages-quickstart
Selenium end to end automation tests with NightwatchJS page oriented

## Prepare
1. Download and install [nodeJS v8.12](https://nodejs.org) 
2. Download and install [Java](https://java.com/en/download/) 
3. Download and install latest [Chorme](https://www.google.com/chrome/browser/desktop/index.html)

## Setup and Run
1. Open terminal and enter npm install -g nightwatch
2. Navigate to this folder with terminal
3. enter npm install
4. enter npm run e2e-setup this will pull a latest Selenium server and chromedriver

    ### For Mac / Ubuntu
    7. it is already set up so you don't have to change anything
    ### For Windows
     7. chage line 16 in nightwatch.json file from "webdriver.chrome.driver": "./bin/chromedriver" 
       into "webdriver.chrome.driver": "./bin/chromedriver.exe"

8. enter nightwatch -e chrome tests/testName.js to run tests in Chrome browser