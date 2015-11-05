'use strict';

var weave = window.weave || {};

(function () {
  var app = document.getElementById('app');

  /**
   * Listen for event when template gets attached to the page and bind event
   * handlers
   */
  app.addEventListener('dom-change', function () {
    var signIn = document.querySelector('google-signin');
    signIn.addEventListener('google-signin-success', app.signedIn.bind(this));
    signIn.addEventListener('google-signed-out', app.signedOut.bind(this));
  });

  /**
   * Handle sign in and start api discovery process
   */
  app.signedIn = function () {
    gapi.client.weave.devices.list().then(function (resp) {
      app.set('devices', resp.result.devices);
    });
  };

  /**
   * Handle sign out and clear devices
   */
  app.signedOut = function () {
    app.set('devices', null);
  };

  /**
   * Load discovery json and get a list of devices
   */
  app.loadDiscovery = function () {
    gapi.client.load(weaveDiscovery, 'v1')
        .then(function () {
          console.log('gapi loaded');
        }, function () {
          console.log('gapi error');
        })
  };

  /**
   * Helper method to recurse through the JSON object and pull out commandDef strings.
   *
   * @param currElement {Object} current object
   * @param key {String} key of current object
   * @param path {String} string containing key path to object
   * @returns {Array} of objects defining the commandDef and parameters
   */
  app.getCommandDefs = function (currElement, key, path) {
    var commands = [];
    if (!path) {
      path = [];
    }
    var currPath = path.slice();
    if (key) {
      currPath.push(key);
    }
    if (currElement.kind && currElement.kind === "weave#commandDef") {
      var parameters = [];
      for (var param in currElement.parameters) {
        currElement.parameters[param].parameter = param;
        parameters.push(currElement.parameters[param]);
      }
      commands.push({
        'command': currPath.join('.'),
        'parameters': parameters
      });
    } else {
      for (var currKey in currElement) {
        Array.prototype.splice.apply(
            commands, [commands.length, 0].concat(
                app.getCommandDefs(currElement[currKey], currKey, currPath)));
      }
    }
    return commands;
  };

  /**
   * Checks if the current commandDef is _ledflasher._set
   *
   * @param param {String} commandDef string
   * @returns {boolean} if the commandDef string matches _ledflasher._set
   */
  app.isSet = function (param) {
    return param.command === "_ledflasher._set";
  };

  /**
   * Checks if the current led on the device is on
   *
   * @param device {Object} device to check against
   * @param id {Number} id of led
   * @returns {Boolean} true if the device led is on
   */
  app.isActive = function (device, id) {
    return device.state._ledflasher._leds[id - 1];
  };

  /**
   * Returns true if the device is offline
   *
   * @param device {Object} device to check against
   * @returns {boolean} true if device connectionStatus is offline
   */
  app.isOffline = function (device) {
    return device.connectionStatus === "offline"
  };

  /**
   * Converts the range of led ids into an array of led objects
   *
   * @param param {Object} commandDef parameters
   * @returns {Array} of objects in the following format
   * {
 *   'command': [command],
 *   'id': [id of led]
 * }
   */
  app.rangeToArray = function (param, state) {
    var leds = [];
    for (var i = param.parameters[0].minimum; i <= param.parameters[0].maximum; i++) {
      leds.push({
        'command': param.command,
        'id': i,
        'state': state._ledflasher._leds[i - 1]
      });
    }
    return leds;
  };

  /**
   * Sends a request to toggle the led triggering the event
   *
   * @param event {Event}
   */
  app.toggleLed = function (event) {
    var commandParameter = {
      'deviceId': event.target.device,
      'name': event.target.command,
      'parameters': {
        '_led': event.target._led,
        '_on': event.target.active
      }
    };
    gapi.client.weave.commands.insert(commandParameter).then(function (resp) {
      console.log('success' + JSON.stringify(resp));
    }, function (resp) {
      console.log('failure' + JSON.stringify(resp));
    });
  };

  weave.app = app;
})();

function gapiLoaded() {
  weave.app.loadDiscovery();
}
