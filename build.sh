#!/bin/bash
cd android/
mkdir app
cd app/
mkdir build
cd build/
mkdir intermediates
cd intermediates/
mkdir assets
cd assets/
mkdir debug
cd ../
cd ../
cd ../
cd ../
cd ../
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug
cd android/
./gradlew assembleDebug
cd app/
mkdir build
cd build/
mkdir outputs
cd outputs/
mkdir apk
cd apk/
adb install -r app-debug.apk
read -n1 -r -p "Process ended." key
