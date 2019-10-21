"use strict";

import { AbstractScreen, ELEMENT_TYPE } from './AbstractScreen';

export default class Setup extends AbstractScreen {

  constructor(driver) {
    super(driver);
  }

  appSleepForSeconds(seconds) {
    return this.sleepForSeconds(seconds);
  }

  waitForWelcomeTitleToAppear() {
    return this.waitForElement(ELEMENT_TYPE.id, 'android:id/title');
  }

  appWelcomeStepTitle() {
    return this.getElement(ELEMENT_TYPE.id, 'android:id/title');
  }

  welcomeSetupNextButton() {
    return this.getElement(ELEMENT_TYPE.id, 'org.gnucash.android:id/btn_save');
  }

  welcomeSetupBackButton() {
    return this.getElement(ELEMENT_TYPE.id, 'org.gnucash.android:id/btn_cancel');
  }

  waitForNextStepToAppear(){
    return this.waitForElement(ELEMENT_TYPE.xpath, '//*[@resource-id="android:id/list"]/android.widget.CheckedTextView[2]');
  }

  stepTwoEURradioButton() {
    return this.getElement(ELEMENT_TYPE.xpath, '//*[@resource-id="android:id/list"]/android.widget.CheckedTextView[2]');
  }

  stepThreeCreateDefaultAccounts() {
    return this.getElement(ELEMENT_TYPE.xpath, '//*[@resource-id="android:id/list"]/android.widget.CheckedTextView[1]');
  }

  stepFourSendCrashReportsAutomatically() {
    return this.getElement(ELEMENT_TYPE.xpath, '//*[@resource-id="android:id/list"]/android.widget.CheckedTextView[1]');
  }

  waitForReviewStepToAppear() {
    return this.waitForReviewStepToAppear(ELEMENT_TYPE.xpath, '(//*[@resource-id="android:id/text2"])[1]');
  }

  reviewStepDefaultCurrency() {
    return this.getElement(ELEMENT_TYPE.xpath, '//*[@resource-id="org.gnucash.android:id/pager"]/android.widget.LinearLayout/android.widget.ListView/android.widget.LinearLayout[position()=1]/android.widget.TextView[position()=2]');
  }

  reviewStepAccountSetup() {
    return this.getElement(ELEMENT_TYPE.xpath, '(//*[@resource-id="android:id/text2"])[2]');
  }

  reviewStepFeedbackOptions() {
    return this.getElement(ELEMENT_TYPE.xpath, '(//*[@resource-id="android:id/text2"])[3]');
  }

  waitForAlertToAppear() {
    return this.waitForElement(ELEMENT_TYPE.id, 'android:id/button1');
  }

  alertTitle() {
    return this.getElement(ELEMENT_TYPE.id, 'android:id/alertTitle');
  }

  alertMessage() {
    return this.getElement(ELEMENT_TYPE.id, 'android:id/message');
  }

  alertDismissButton() {
    return this.getElement(ELEMENT_TYPE.id, 'android:id/button1');
  }

  leftMenuIcon() {
    return this.getElement(ELEMENT_TYPE.accessibilityid, 'Navigation drawer opened');
  }

  waitForLeftMenuToExpand() {
    return this.waitForElement(ELEMENT_TYPE.id, 'org.gnucash.android:id/book_name');
  }

}
