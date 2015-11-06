# Weave Sample

## Overview
This web app is a sample for the client side JavaScript implementation of the Weave API.  
It showcases loading devices and sending commands to weave devices.  It uses Polymer to template and
 handle multiple devices.

## Prerequisites

[Node](https://nodejs.org/en/)
[OAuth ClientId with Weave API enabled](https://developers.google.com/weave/v1/dev-guides/getting-started/authorizing)
## Setup

Install dependencies
1. `npm install`

Install Polymer dependencies
2. `bower install`

Replace ClientId
3.  replace the `google-signin` `client-id` attribute with your ClientId

Start the server
3. `gulp`

## How it works
Interacting with the Weave API is broken into 3 interactions:

* Authorizing access
* Listing devices
* Sending commands

### Authorizing access
This sample uses the google-signin Polymer element to handle OAuth2 authorization for the Weave API.

Once authorization is granted the auth tokens are automatically saved to Google gapi JavaScript
library.


### Listing devices
After a successful authorization app.js immediately calls:

    gapi.client.weave.devices.list()
    
Which returns a Promise that we can execute to get a list of devices.

This list is parsed by Polymer to generate the UI representing each device.

### Sending commands
The command to send is an attribute of each toggle element.  When the toggle is toggled, the app
pulls the attribute, generates the command and sends it using 

    gapi.client.weave.commands.insert()
