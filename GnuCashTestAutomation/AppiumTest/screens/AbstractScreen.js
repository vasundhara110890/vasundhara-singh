"use strict";

const ELEMENT_TYPE = {
  id: 'id',
  class: 'className',
  xpath: 'xpath',
  accessibilityid: 'accessibilityid'
};

class AbstractScreen {

  constructor(driver) {
    this.driver = driver;
  }

  navigateBackToPreviousScreen() {
    this.driver.back();
  }

  getElement(type, value) {
    switch (type) {
      case ELEMENT_TYPE.id:
        return this.driver.elementById(value);

      case ELEMENT_TYPE.class:
        return this.driver.elementByClassName(value);

      case ELEMENT_TYPE.xpath:
        return this.driver.elementByXPath(value);

      case ELEMENT_TYPE.accessibilityid:
        return this.driver.elementByAccessibilityId(value);

      default:
        const errorMsg = `Error: AbstractScreen.getElement: No ${value} of type ${type}`;
        console.log(errorMsg);
        return null;
    }
  }

  waitForElement(type, value, asserters) {
    switch (type) {
      case ELEMENT_TYPE.id:
        return this.driver.waitForElementById(value, 20000, 100);

      case ELEMENT_TYPE.class:
        return this.driver.waitForElementByClassName(value, 20000, 100);

      case ELEMENT_TYPE.xpath:
        return this.driver.waitForElementByXPath(value, 20000, 100);

      case ELEMENT_TYPE.accessibilityid:
        return this.driver.waitForElementByAccessibilityId(value, 20000, 100);

      default:
        const errorMsg = `Error: AbstractScreen.waitForElement: No ${value} of type ${type}`;
        console.log(errorMsg);
        return null;
    }
  }

  sendKeysToElement(element, value) {
    return element
      .sendKeys(value)
      .getValue().should.become(value)
  }

  sleepForSeconds(microseconds) {
    this.driver.sleep(microseconds);
    return this.driver;
  }

}

export { AbstractScreen, ELEMENT_TYPE };
