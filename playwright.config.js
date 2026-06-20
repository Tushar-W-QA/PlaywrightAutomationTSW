// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  // This is which specific testcase we wanted to run
  testDir: './tests',

  // for every step loading page and images all thing
  timeout: 40 * 1000, 
  
  // This expect -- it is specially for assertion and validation of test cases
  expect : 
  {
    timeout: 40 * 1000
  },

  // reporter: exactly in which file you want the report we have to mention in the Reporter Object
  reporter: 'html',

  // Use : It is used for which specific browser, we want to execute/run the scenario
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on', // off, retain-on-failure
  },


});

module.exports = config;

