# Add Skipper
## What it Does
Automatically skips all *skippable* youtube adds the instant they appear. Works for ads at the beinging and in the middle of videos as well as the pop-up banner ads. Does not work for ads that have no skip option.
## How it Works
This is a chrome extention that runs a content script everytime you load a page thats on YouTube. It uses a background script to listen for movement within the YouTube domain (watching another video). When it detects you've started a new video a function is run that repeatedly tries to define the html element that has the "skip add" click listener. Once it's defined it is clicked with the javascript .click() function. 

Mid-video ads and banner adds are detected by a mutation observer that is added to the page whenever a new video is started. This listenes for added or removed child elements in "video-ads" DIV. 

## How to Install

1)