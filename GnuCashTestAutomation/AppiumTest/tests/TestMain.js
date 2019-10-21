"use strict";

import AppiumDriverBuilder from '../utility/AppiumDriverBuilder';
import GnuCashMobileApp from '../utility/GnuCashMobileApp';
import TestSetupScreen from './TestSetupScreen';
var TestSetup;
var path = require("path");
var wd = require("wd");
let driver;

describe("Testing GnuCash Mobile App", function()
{
  var app;

  before(function(done) {
    // Add app path for androidDriver initializer
    app = path.resolve(__dirname, '../../GnucashAndroid_v2.4.0.apk');
    var driverBuilder = new AppiumDriverBuilder(app);
    // Initializing app client
    driver = driverBuilder.initiateAppDriver();
    app = new GnuCashMobileApp(driver);
    console.log('App Boot up - Completed');
    done();
    })

  after(function() {
    return driver.quit();
  });

  describe('Test 1 - Setup Screen', function()
  {
    before(function()
    {
      TestSetup = new TestSetupScreen(app);
    });

    describe('Welcome Setup', function()
    {
      it("user should be able to user app after completing welcome setup", function()
      {
        return TestSetup.checkWelcomeSetup();
        done();
      });
    });
  });
});
