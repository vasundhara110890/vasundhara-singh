"use strict";
var chai = require('chai');
var expect = chai.expect;

export default class TestSetupScreen {
  constructor(app) {
    this.app = app;
  }

  name() {
    return 'Test Setup Screen';
  }

  checkWelcomeSetup() {
    var app = this.app;
    return app.setupScreen.appWelcomeStepTitle()
    .then((element) => {
      return element.text();
    })
    .then((value) => {
      return expect(value, 'Incorrect Step One title').to.equal("Welcome to GnuCash");
    })
    .then(() => app.setupScreen.welcomeSetupNextButton())
    .then((element) => {
      element.click();
      return app.setupScreen.waitForNextStepToAppear();
    })
    .then(() => app.setupScreen.appWelcomeStepTitle())
    .then((element) => {
      return element.text();
    })
    .then((value) => {
      return expect(value, 'Incorrect Step Two title').to.equal("Default Currency");
    })
    .then(() => app.setupScreen.stepTwoEURradioButton())
    .then((element) => element.click())
    .then(() => app.setupScreen.welcomeSetupNextButton())
    .then((element) => {
      element.click();
      return app.setupScreen.waitForNextStepToAppear();
    })
    .then(() => app.setupScreen.appWelcomeStepTitle())
    .then((element) => {
      return element.text();
    })
    .then((value) => {
      return expect(value, 'Incorrect Step Three title').to.equal("Account Setup");
    })
    .then(() => app.setupScreen.stepThreeCreateDefaultAccounts())
    .then((element) => element.click())
    .then(() => app.setupScreen.welcomeSetupNextButton())
    .then((element) => {
      element.click();
      return app.setupScreen.waitForNextStepToAppear();
    })
    .then(() => app.setupScreen.appWelcomeStepTitle())
    .then((element) => {
      return element.text();
    })
    .then((value) => {
      return expect(value, 'Incorrect Step Four title').to.equal("Feedback Options");
    })
    .then(() => app.setupScreen.stepFourSendCrashReportsAutomatically())
    .then((element) => element.click())
    .then(() => app.setupScreen.welcomeSetupNextButton())
    .then((element) => {
      element.click();
    })
    .then(() => app.setupScreen.welcomeSetupNextButton())
    .then((element) => {
      element.click();
      return app.setupScreen.waitForAlertToAppear();
    })
    .then(() => app.setupScreen.alertTitle())
    .then((element) => {
      return element.text();
    })
    .then((value) => {
      return expect(value, 'Incorrect alert title').to.equal("What's New - v2.4.0");
    })
    .then(() => app.setupScreen.alertMessage())
    .then((element) => {
      return element.text();
    })
    .then((value) => {
      return expect(value, 'Incorrect alert message').to.equal("- Added ability to export to any service which supports the Storage Access Framework \n - Added option to set the location for regular automatic backups (See backup settings)\n - Added Bitcoin currency support\n - Added support for renaming books\n - Multiple bug fixes and improvements\n");
    })
    .then(() => app.setupScreen.alertDismissButton())
    .then((element) => element.click())
  }

}
