# leonardo_cypress

## Installation

1. Download and install Visual Studio Code (https://code.visualstudio.com/download)
2. Download and install Node.js (https://nodejs.org/en/download/)
3. Clone this Git repository to your local machine
4. Open Terminal within Visual Studio Code and install the dependencies by running `npm install` from the terminal

## Local Usage

The file 'package.json' contains the commands to run scripts, and these are all decalered in 'scripts' object. Each command is run from the terminal and must be prefixed with `npm run`, for example `npm run cypress:open`

1. `cy:open` Opens the Cypress Test Runner
2. `cy:run` Run the Cypress Test Runner in headless mode.
3. `triggerAllTestsHeadless` Runs the 'regression_tests' test cases in a Chrome browser headlessly and records its results in the Cypress Dashboard.
4. `triggerSmokeTestHeadless` Runs the 'p1_tests' test cases in a chrome browser headlessly and records its results in the cypress Dashboard.
5. `browserstack` Runs the test cases with BrowserStack integration.