"use strict";

var wd = require("wd");

export default class AppiumDriverBuilder {
  constructor(appPath) {
    if (appPath === undefined) {
      throw new Error(`'App Path' is manadatory requirement. Update AppPath in beforeall() of TestMain.js`);
    }

    this.desired = {
      platformName: "android",
      platformVersion: "8.1.0",
      deviceName: "ZY223XZL55", //connected device name, check in terminal using command: adb devices
      app: appPath,
      appPackage: "org.gnucash.android",
      appActivity: "org.gnucash.android.ui.account.AccountsActivity"
    };
    this.driver = null;
  }

  initiateAppDriver(ip = 'localhost', port = 4723)
  {
    this.driver = wd.promiseChainRemote(ip, port);
    return this.driver.init(this.desired);
  }
}
