# vasundhara-singh

# Steps to setup test automation are as follows:
# Setup adb:
Download the “SDK Platform-Tools for Mac” from:
https://developer.android.com/studio/releases/platform-tools.html

- Unzip the downloaded file by double-clicking on it.
- Move the unzipped folder (i.e., “platform-tools”) to a useful location (e.g., I put it in a folder called “android-sdk-macosx” in a folder called “SDKs” in my home directory: ~/SDKs/android-sdk-macosx/platform-tools/).
 -Add “platform-tools” to your PATH variable by invoking the following in the Terminal (make sure to change the file path to reflect where you placed the folder “platform-tools” on your system):
      echo 'export PATH=$PATH:~/SDKs/android-sdk-macosx/platform-tools/' >> ~/.bash_profile
-Execute the following command to reload your bash profile (this applies the change to the PATH variable):
      source ~/.bash_profile
Note: The PATH variable is the search path for commands. It is a list of directories, each separated by a colon, in which the shell looks for commands. To see what values are currently in your PATH variable, use the following:
      echo $PATH
To see if everything is working, connect an Android device and enter the following in the Terminal:
      adb devices
It should return something like this (if you have one Android device attached):
    List of devices attached
    200804114c28b9e	device . -----example

200804114c28b9e is the deviceName that needs to be updated in test scripts within AppiumTest> Utility> AppiumDriverBuilder.js

# “Enable adb debugging on your device”:
To use adb with a device connected over USB, you must enable USB debugging in the device system settings, under Developer options.

On Android 4.2 and higher, the Developer options screen is hidden by default. To make it visible, go to Settings > About phone and tap Build number seven times. Return to the previous screen to find Developer options at the bottom.


# Once this setup is complete, proceed to the follwoing steps:

## Open Terminal window 1:
- brew install node      # get node.js
- npm install -g appium  # get appium
- npm install wd         # get appium client
- appium                 # start appium server and let it run in background

## Open New Terminal Window 2:
- cd <testFolderPath>    # path of the downloaded tests folder - GnuCashTestAutomation
- npm install            # install all the dependencies from package.json
- npm install            # install all the dependencies from package.json
- npm test               # run tests
