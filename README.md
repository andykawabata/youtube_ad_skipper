# Ad Skipper
## What it Does
Automatically skips all *skippable* youtube ads the instant they appear. Works for ads at the beinging and in the middle of videos as well as the pop-up banner ads. Does not work for ads that have no skip option.
## How it Works
This is a chrome extension that runs a content script everytime you load a page thats on YouTube. It uses a background script to listen for movement within the YouTube domain (clicking on another video). When it detects you've started a new video, a function is run that repeatedly tries to define the html element that has the "skip add" click listener. Once it's defined it is clicked with the javascript .click() function. 

Mid-video ads and banner adds are detected by a mutation observer that is added to the page whenever a new video is started. This listenes for added or removed child elements in "video-ads" DIV. 

## How to Install

1)  Click the green "Clone or Download" button
2)  Click "download ZIP"
3)  Unzip the file and put it anywhere you like
4)  Open a new tab in your Chrome browser and type in "chrome://extensions" in the search bar. Press enter.
5)  In the upper right corner, turn "Developer Mode" on. 
6)  Click "load unpacked"
7)  Find the folder you just downloaded/unzipped "youtube_ad_skipper-master" and click "Select Folder"
8)  Turn "Developer Mode" off