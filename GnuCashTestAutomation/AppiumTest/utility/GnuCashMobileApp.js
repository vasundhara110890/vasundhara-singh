"use strict";

import Setup from '../screens/Setup';


export default class GnuCashMobileApp {

  constructor (driver) {
    this.setupScreen = new Setup(driver);
  }
}
