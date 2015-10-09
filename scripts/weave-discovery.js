var weaveDiscovery = {
  "kind": "discovery#restDescription",
  "etag": "\"ye6orv2F-1npMW3u9suM3a7C5Bo/ujy-DWox-HlWsaZy3zgQavh92Rs\"",
  "discoveryVersion": "v1",
  "id": "clouddevices:v1",
  "name": "clouddevices",
  "canonicalName": "CloudDevices",
  "version": "v1",
  "revision": "20150918",
  "title": "Cloud Devices API",
  "description": "Lets you register, view and manage cloud ready devices.",
  "ownerDomain": "google.com",
  "ownerName": "Google",
  "icons": {
    "x16": "http://www.google.com/images/icons/product/search-16.gif",
    "x32": "http://www.google.com/images/icons/product/search-32.gif"
  },
  "documentationLink": "https://developers.google.com/cloud-devices/",
  "protocol": "rest",
  "baseUrl": "https://www.googleapis.com/clouddevices/v1/",
  "basePath": "/clouddevices/v1/",
  "rootUrl": "https://www.googleapis.com/",
  "servicePath": "clouddevices/v1/",
  "batchPath": "batch",
  "parameters": {
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "default": "json",
      "enum": [
        "json"
      ],
      "enumDescriptions": [
        "Responses with Content-Type of application/json"
      ],
      "location": "query"
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response.",
      "location": "query"
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.",
      "location": "query"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user.",
      "location": "query"
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks.",
      "default": "true",
      "location": "query"
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.",
      "location": "query"
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits.",
      "location": "query"
    }
  },
  "auth": {
    "oauth2": {
      "scopes": {
        "https://www.googleapis.com/auth/clouddevices": {
          "description": "Manage your cloud devices"
        },
        "https://www.googleapis.com/auth/clouddevices.install": {
          "description": "Access Cloud devices with this application"
        }
      }
    }
  },
  "schemas": {
    "AclEntriesListResponse": {
      "id": "AclEntriesListResponse",
      "type": "object",
      "description": "List of Access control list entries.",
      "properties": {
        "aclEntries": {
          "type": "array",
          "description": "The actual list of ACL entries.",
          "items": {
            "$ref": "AclEntry"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#aclEntriesListResponse\".",
          "default": "clouddevices#aclEntriesListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "Token corresponding to the next page of ACL entries."
        },
        "totalResults": {
          "type": "integer",
          "description": "The total number of ACL entries for the query. The number of items in a response may be smaller due to paging.",
          "format": "int32"
        }
      }
    },
    "AclEntry": {
      "id": "AclEntry",
      "type": "object",
      "properties": {
        "creatorEmail": {
          "type": "string",
          "description": "User who created this entry. At the moment it is populated only when pending == true."
        },
        "delegator": {
          "type": "string",
          "description": "User on behalf of whom the access is granted to the application."
        },
        "id": {
          "type": "string",
          "description": "Unique ACL entry ID."
        },
        "key": {
          "type": "string",
          "description": "Public access key value. Set only when scopeType is PUBLIC.",
          "format": "int64"
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#aclEntry\".",
          "default": "clouddevices#aclEntry"
        },
        "pending": {
          "type": "boolean",
          "description": "Whether this ACL entry is pending for user reply to accept/reject it."
        },
        "role": {
          "type": "string",
          "description": "Access role granted to this scope.",
          "enum": [
            "manager",
            "owner",
            "robot",
            "user",
            "viewer"
          ],
          "enumDescriptions": [
            "",
            "",
            "",
            "",
            ""
          ],
          "annotations": {
            "required": [
              "clouddevices.aclEntries.insert"
            ]
          }
        },
        "scopeId": {
          "type": "string",
          "description": "Email address if scope type is user or group, domain name if scope type is a domain.",
          "annotations": {
            "required": [
              "clouddevices.aclEntries.insert"
            ]
          }
        },
        "scopeMembership": {
          "type": "string",
          "description": "Type of membership the user has in the scope.",
          "enum": [
            "delegator",
            "manager",
            "member",
            "none"
          ],
          "enumDescriptions": [
            "",
            "",
            "",
            ""
          ]
        },
        "scopeName": {
          "type": "string",
          "description": "Displayable scope name."
        },
        "scopePhotoUrl": {
          "type": "string",
          "description": "URL of this scope displayable photo."
        },
        "scopeType": {
          "type": "string",
          "description": "Type of the access scope.",
          "enum": [
            "application",
            "domain",
            "group",
            "public",
            "user"
          ],
          "enumDescriptions": [
            "",
            "",
            "",
            "",
            ""
          ]
        }
      }
    },
    "Application": {
      "id": "Application",
      "type": "object",
      "description": "Contains information about a recommended application for a device model.",
      "properties": {
        "description": {
          "type": "string",
          "description": "User readable application description."
        },
        "iconUrl": {
          "type": "string",
          "description": "Application icon URL."
        },
        "id": {
          "type": "string",
          "description": "Unique application ID."
        },
        "name": {
          "type": "string",
          "description": "User readable application name."
        },
        "price": {
          "type": "number",
          "description": "Price of the application.",
          "format": "double"
        },
        "publisherName": {
          "type": "string",
          "description": "User readable publisher name."
        },
        "type": {
          "type": "string",
          "description": "Application type.",
          "enum": [
            "android",
            "chrome",
            "web"
          ],
          "enumDescriptions": [
            "",
            "",
            ""
          ]
        },
        "url": {
          "type": "string",
          "description": "Application install URL."
        }
      }
    },
    "AuthorizedApp": {
      "id": "AuthorizedApp",
      "type": "object",
      "properties": {
        "displayName": {
          "type": "string",
          "description": "The display name of the app."
        },
        "iconUrl": {
          "type": "string",
          "description": "An icon for the app."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#authorizedApp\".",
          "default": "clouddevices#authorizedApp"
        },
        "projectId": {
          "type": "string",
          "description": "Project ID."
        }
      }
    },
    "AuthorizedAppsListResponse": {
      "id": "AuthorizedAppsListResponse",
      "type": "object",
      "description": "List of authorized apps.",
      "properties": {
        "authorizedApps": {
          "type": "array",
          "description": "The list of authorized apps.",
          "items": {
            "$ref": "AuthorizedApp"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#authorizedAppsListResponse\".",
          "default": "clouddevices#authorizedAppsListResponse"
        }
      }
    },
    "Command": {
      "id": "Command",
      "type": "object",
      "properties": {
        "creationTimeMs": {
          "type": "string",
          "description": "Timestamp since epoch of a creation of a command.",
          "format": "int64"
        },
        "creatorEmail": {
          "type": "string",
          "description": "User that created the command (not applicable if the user is deleted)."
        },
        "deviceId": {
          "type": "string",
          "description": "Device ID that this command belongs to.",
          "annotations": {
            "required": [
              "clouddevices.commands.insert"
            ]
          }
        },
        "error": {
          "type": "object",
          "description": "Error descriptor.",
          "properties": {
            "arguments": {
              "type": "array",
              "description": "Positional error arguments used for error message formatting.",
              "items": {
                "type": "string"
              }
            },
            "code": {
              "type": "string",
              "description": "Error code."
            },
            "message": {
              "type": "string",
              "description": "User-visible error message populated by the cloud based on command name and error code."
            }
          }
        },
        "expirationTimeMs": {
          "type": "string",
          "description": "Timestamp since epoch of command expiration.",
          "format": "int64"
        },
        "expirationTimeoutMs": {
          "type": "string",
          "description": "Expiration timeout for the command since its creation, 10 seconds min, 30 days max.",
          "format": "int64"
        },
        "id": {
          "type": "string",
          "description": "Unique command ID."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#command\".",
          "default": "clouddevices#command"
        },
        "name": {
          "type": "string",
          "description": "Full command name, including package.",
          "annotations": {
            "required": [
              "clouddevices.commands.insert"
            ]
          }
        },
        "parameters": {
          "$ref": "JsonObject",
          "description": "Parameters list."
        },
        "progress": {
          "$ref": "JsonObject",
          "description": "Command-specific progress descriptor."
        },
        "results": {
          "$ref": "JsonObject",
          "description": "Results list."
        },
        "state": {
          "type": "string",
          "description": "Current command state.",
          "enum": [
            "aborted",
            "cancelled",
            "done",
            "error",
            "expired",
            "inProgress",
            "queued"
          ],
          "enumDescriptions": [
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        "userAction": {
          "type": "string",
          "description": "Pending command state that is not acknowledged by the device yet."
        }
      }
    },
    "CommandsListResponse": {
      "id": "CommandsListResponse",
      "type": "object",
      "description": "List of commands.",
      "properties": {
        "commands": {
          "type": "array",
          "description": "The actual list of commands.",
          "items": {
            "$ref": "Command"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#commandsListResponse\".",
          "default": "clouddevices#commandsListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "Token for the next page of commands."
        },
        "totalResults": {
          "type": "integer",
          "description": "The total number of commands for the query. The number of items in a response may be smaller due to paging.",
          "format": "int32"
        }
      }
    },
    "CommandsQueueResponse": {
      "id": "CommandsQueueResponse",
      "type": "object",
      "properties": {
        "commands": {
          "type": "array",
          "description": "Commands to be executed.",
          "items": {
            "$ref": "Command"
          }
        }
      }
    },
    "Device": {
      "id": "Device",
      "type": "object",
      "properties": {
        "channel": {
          "type": "object",
          "description": "Device notification channel description.",
          "properties": {
            "connectionStatusHint": {
              "type": "string",
              "description": "Connection status hint, set by parent device.",
              "enum": [
                "offline",
                "online",
                "unknown"
              ],
              "enumDescriptions": [
                "",
                "",
                ""
              ]
            },
            "gcmRegistrationId": {
              "type": "string",
              "description": "GCM registration ID. Required if device supports GCM delivery channel."
            },
            "gcmSenderId": {
              "type": "string",
              "description": "GCM sender ID. For Chrome apps must be the same as sender ID during registration, usually API project ID."
            },
            "parentId": {
              "type": "string",
              "description": "Parent device ID (aggregator) if it exists."
            },
            "supportedType": {
              "type": "string",
              "description": "Channel type supported by device.",
              "enum": [
                "gcm",
                "gcp",
                "parent",
                "pull",
                "xmpp"
              ],
              "enumDescriptions": [
                "",
                "",
                "",
                "",
                ""
              ],
              "annotations": {
                "required": [
                  "clouddevices.registrationTickets.insert"
                ]
              }
            }
          },
          "annotations": {
            "required": [
              "clouddevices.devices.insert"
            ]
          }
        },
        "commandDefs": {
          "type": "object",
          "description": "Description of commands supported by the device. This field is writable only by devices.",
          "additionalProperties": {
            "$ref": "PackageDef"
          },
          "annotations": {
            "required": [
              "clouddevices.devices.insert"
            ]
          }
        },
        "connectionStatus": {
          "type": "string",
          "description": "Device connection status."
        },
        "creationTimeMs": {
          "type": "string",
          "description": "Timestamp of creation of this device in milliseconds since epoch UTC.",
          "format": "int64"
        },
        "description": {
          "type": "string",
          "description": "User readable description of this device."
        },
        "deviceKind": {
          "type": "string",
          "description": "Device kind. Deprecated, provide \"modelManifestId\" instead.",
          "enum": [
            "accessPoint",
            "aggregator",
            "camera",
            "developmentBoard",
            "printer",
            "scanner",
            "speaker",
            "storage",
            "toy",
            "vendor",
            "video"
          ],
          "enumDescriptions": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        "id": {
          "type": "string",
          "description": "Unique device ID."
        },
        "invitations": {
          "type": "array",
          "description": "List of pending invitations for the currently logged-in user.",
          "items": {
            "$ref": "Invitation"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#device\".",
          "default": "clouddevices#device"
        },
        "lastSeenTimeMs": {
          "type": "string",
          "description": "Timestamp of the last request from this device in milliseconds since epoch UTC. Supported only for devices with XMPP channel type.",
          "format": "int64"
        },
        "lastUpdateTimeMs": {
          "type": "string",
          "description": "Timestamp of the last device update in milliseconds since epoch UTC.",
          "format": "int64"
        },
        "lastUseTimeMs": {
          "type": "string",
          "description": "Timestamp of the last device usage in milliseconds since epoch UTC.",
          "format": "int64"
        },
        "location": {
          "type": "string",
          "description": "User readable location of the device (name of the room, office number, building/floor, etc)."
        },
        "modelManifest": {
          "type": "object",
          "description": "Device model information provided by the model manifest of this device.",
          "properties": {
            "modelName": {
              "type": "string",
              "description": "Device model name."
            },
            "oemName": {
              "type": "string",
              "description": "Name of device model manufacturer."
            }
          }
        },
        "modelManifestId": {
          "type": "string",
          "description": "Model manifest ID of this device."
        },
        "name": {
          "type": "string",
          "description": "Name of this device provided by the manufacturer."
        },
        "owner": {
          "type": "string",
          "description": "E-mail address of the device owner."
        },
        "personalizedInfo": {
          "type": "object",
          "description": "Personalized device information for currently logged-in user.",
          "properties": {
            "lastUseTimeMs": {
              "type": "string",
              "description": "Timestamp of the last device usage by the user in milliseconds since epoch UTC.",
              "format": "int64"
            },
            "location": {
              "type": "string",
              "description": "Personalized device location."
            },
            "maxRole": {
              "type": "string",
              "description": "The maximum role on the device."
            },
            "name": {
              "type": "string",
              "description": "Personalized device display name."
            }
          }
        },
        "serialNumber": {
          "type": "string",
          "description": "Serial number of a device provided by its manufacturer.",
          "annotations": {
            "required": [
              "clouddevices.devices.insert"
            ]
          }
        },
        "state": {
          "$ref": "JsonObject",
          "description": "Device state. This field is writable only by devices."
        },
        "stateDefs": {
          "type": "object",
          "description": "Description of the device state. This field is writable only by devices.",
          "additionalProperties": {
            "$ref": "StateDef"
          }
        },
        "stateValidationEnabled": {
          "type": "boolean",
          "description": "Whether state validation is enabled for the device."
        },
        "tags": {
          "type": "array",
          "description": "Custom free-form manufacturer tags.",
          "items": {
            "type": "string"
          }
        },
        "uiDeviceKind": {
          "type": "string",
          "description": "Device kind from the model manifest used in UI applications."
        }
      }
    },
    "DeviceStatePatchesStatePatch": {
      "id": "DeviceStatePatchesStatePatch",
      "type": "object",
      "description": "Device state patch with corresponding timestamp.",
      "properties": {
        "patch": {
          "$ref": "JsonObject",
          "description": "State patch."
        },
        "timeMs": {
          "type": "string",
          "description": "Timestamp of a change. Local time, UNIX timestamp or time since last boot can be used.",
          "format": "int64"
        }
      }
    },
    "DevicesGetNotificationsResponse": {
      "id": "DevicesGetNotificationsResponse",
      "type": "object",
      "properties": {
        "ack": {
          "type": "string",
          "description": "These notifications ack identifier that should be passed in the subsequent request."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#devicesGetNotificationsResponse\".",
          "default": "clouddevices#devicesGetNotificationsResponse"
        },
        "notifications": {
          "type": "array",
          "description": "Pending device notifications.",
          "items": {
            "$ref": "Notification"
          }
        }
      }
    },
    "DevicesListResponse": {
      "id": "DevicesListResponse",
      "type": "object",
      "description": "List of devices.",
      "properties": {
        "devices": {
          "type": "array",
          "description": "The actual list of devices.",
          "items": {
            "$ref": "Device"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#devicesListResponse\".",
          "default": "clouddevices#devicesListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "Token corresponding to the next page of devices."
        },
        "totalResults": {
          "type": "integer",
          "description": "The total number of devices for the query. The number of items in a response may be smaller due to paging.",
          "format": "int32"
        }
      }
    },
    "DevicesPatchStateRequest": {
      "id": "DevicesPatchStateRequest",
      "type": "object",
      "properties": {
        "patches": {
          "type": "array",
          "description": "The list of state patches with corresponding timestamps.",
          "items": {
            "$ref": "DeviceStatePatchesStatePatch"
          }
        },
        "requestTimeMs": {
          "type": "string",
          "description": "Timestamp of a request. Local time, UNIX timestamp or time since last boot can be used.",
          "format": "int64"
        }
      }
    },
    "DevicesPatchStateResponse": {
      "id": "DevicesPatchStateResponse",
      "type": "object",
      "properties": {
        "state": {
          "$ref": "JsonObject",
          "description": "Updated device state."
        }
      }
    },
    "Event": {
      "id": "Event",
      "type": "object",
      "properties": {
        "commandPatch": {
          "type": "object",
          "description": "Command-related changes (if applicable).",
          "properties": {
            "commandId": {
              "type": "string",
              "description": "ID of the affected command."
            },
            "state": {
              "type": "string",
              "description": "New command state."
            }
          }
        },
        "connectionStatus": {
          "type": "string",
          "description": "New device connection state (if connectivity change event)."
        },
        "deviceId": {
          "type": "string",
          "description": "The device that was affected by this event."
        },
        "id": {
          "type": "string",
          "description": "ID of the event."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#event\".",
          "default": "clouddevices#event"
        },
        "statePatch": {
          "$ref": "JsonObject",
          "description": "The device state patch (if applicable)."
        },
        "timeMs": {
          "type": "string",
          "description": "Time the event was generated in milliseconds since epoch UTC.",
          "format": "int64"
        },
        "type": {
          "type": "string",
          "description": "Type of the event.",
          "enum": [
            "commandCancelled",
            "commandCreated",
            "commandExpired",
            "commandUpdated",
            "deviceAclUpdated",
            "deviceConnectivityChange",
            "deviceCreated",
            "deviceDeleted",
            "deviceUpdated"
          ],
          "enumDescriptions": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        "userEmail": {
          "type": "string",
          "description": "User that caused the event (if applicable)."
        }
      }
    },
    "EventsListResponse": {
      "id": "EventsListResponse",
      "type": "object",
      "description": "List of events.",
      "properties": {
        "events": {
          "type": "array",
          "description": "The actual list of events in reverse chronological order.",
          "items": {
            "$ref": "Event"
          }
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#eventsListResponse\".",
          "default": "clouddevices#eventsListResponse"
        },
        "nextPageToken": {
          "type": "string",
          "description": "Token for the next page of events."
        },
        "totalResults": {
          "type": "integer",
          "description": "The total number of events for the query. The number of items in a response may be smaller due to paging.",
          "format": "int32"
        }
      }
    },
    "Invitation": {
      "id": "Invitation",
      "type": "object",
      "properties": {
        "aclEntry": {
          "$ref": "AclEntry",
          "description": "ACL entry associated with this invitation."
        },
        "creatorEmail": {
          "type": "string",
          "description": "Email of a user who created this invitation."
        }
      }
    },
    "JsonObject": {
      "id": "JsonObject",
      "type": "object",
      "description": "JSON object value.",
      "additionalProperties": {
        "$ref": "JsonValue"
      }
    },
    "JsonValue": {
      "id": "JsonValue",
      "type": "any",
      "description": "JSON value -- union over JSON value types."
    },
    "ModelManifest": {
      "id": "ModelManifest",
      "type": "object",
      "description": "Model manifest info.",
      "properties": {
        "applications": {
          "type": "array",
          "description": "List of applications recommended to use with a device model.",
          "items": {
            "$ref": "Application"
          }
        },
        "confirmationImageUrl": {
          "type": "string",
          "description": "URL of image showing a confirmation button."
        },
        "deviceImageUrl": {
          "type": "string",
          "description": "URL of device image."
        },
        "deviceKind": {
          "type": "string",
          "description": "Device kind, see \"deviceKind\" field of the Device resource.",
          "enum": [
            "accessPoint",
            "aggregator",
            "camera",
            "developmentBoard",
            "printer",
            "scanner",
            "speaker",
            "storage",
            "toy",
            "vendor",
            "video"
          ],
          "enumDescriptions": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        },
        "id": {
          "type": "string",
          "description": "Unique model manifest ID."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#modelManifest\".",
          "default": "clouddevices#modelManifest"
        },
        "modelDescription": {
          "type": "string",
          "description": "User readable device model description."
        },
        "modelName": {
          "type": "string",
          "description": "User readable device model name."
        },
        "oemName": {
          "type": "string",
          "description": "User readable name of device model manufacturer."
        },
        "supportPageUrl": {
          "type": "string",
          "description": "URL of device support page."
        }
      }
    },
    "ModelManifestsListResponse": {
      "id": "ModelManifestsListResponse",
      "type": "object",
      "description": "List of model manifests.",
      "properties": {
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#modelManifestsListResponse\".",
          "default": "clouddevices#modelManifestsListResponse"
        },
        "modelManifests": {
          "type": "array",
          "description": "The actual list of model manifests.",
          "items": {
            "$ref": "ModelManifest"
          }
        },
        "nextPageToken": {
          "type": "string",
          "description": "Token corresponding to the next page of model manifests."
        },
        "totalResults": {
          "type": "integer",
          "description": "The total number of model manifests for the query. The number of items in a response may be smaller due to paging.",
          "format": "int32"
        }
      }
    },
    "ModelManifestsValidateCommandDefsRequest": {
      "id": "ModelManifestsValidateCommandDefsRequest",
      "type": "object",
      "properties": {
        "commandDefs": {
          "type": "object",
          "description": "Description of commands.",
          "additionalProperties": {
            "$ref": "PackageDef"
          }
        }
      }
    },
    "ModelManifestsValidateCommandDefsResponse": {
      "id": "ModelManifestsValidateCommandDefsResponse",
      "type": "object",
      "properties": {
        "validationErrors": {
          "type": "array",
          "description": "Validation errors in command definitions.",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "ModelManifestsValidateDeviceStateRequest": {
      "id": "ModelManifestsValidateDeviceStateRequest",
      "type": "object",
      "properties": {
        "state": {
          "$ref": "JsonObject",
          "description": "Device state object."
        }
      }
    },
    "ModelManifestsValidateDeviceStateResponse": {
      "id": "ModelManifestsValidateDeviceStateResponse",
      "type": "object",
      "properties": {
        "validationErrors": {
          "type": "array",
          "description": "Validation errors in device state.",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "Notification": {
      "id": "Notification",
      "type": "object",
      "description": "Notification template.",
      "properties": {
        "command": {
          "$ref": "Command",
          "description": "Relevant command for command-related notifications. May be empty if command size is too big."
        },
        "commandId": {
          "type": "string",
          "description": "ID of the command that is relevant. Set only if notification type is command-related."
        },
        "deviceId": {
          "type": "string",
          "description": "Device that is the target of the notification. If notification type is COMMAND_CREATED this is the device that should execute the command."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#notification\".",
          "default": "clouddevices#notification"
        },
        "type": {
          "type": "string",
          "description": "Notification type.",
          "enum": [
            "COMMAND_CANCELLED",
            "COMMAND_CREATED",
            "COMMAND_DELETED",
            "COMMAND_EXPIRED",
            "COMMAND_UPDATED",
            "DEVICE_ACL_UPDATED",
            "DEVICE_CONNECTIVITY_CHANGE",
            "DEVICE_CREATED",
            "DEVICE_DELETED",
            "DEVICE_UPDATED",
            "DEVICE_USE_TIME_UPDATED"
          ],
          "enumDescriptions": [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
          ]
        }
      }
    },
    "PackageDef": {
      "id": "PackageDef",
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "properties": {
          "displayName": {
            "type": "string",
            "description": "Display name of the command."
          },
          "kind": {
            "type": "string",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#commandDef\".",
            "default": "clouddevices#commandDef"
          },
          "minimalRole": {
            "type": "string",
            "description": "Minimal role required to execute command.",
            "enum": [
              "manager",
              "owner",
              "user",
              "viewer"
            ],
            "enumDescriptions": [
              "",
              "",
              "",
              ""
            ]
          },
          "parameters": {
            "type": "object",
            "description": "Parameters of the command.",
            "additionalProperties": {
              "$ref": "JsonObject"
            }
          }
        }
      }
    },
    "PersonalizedInfo": {
      "id": "PersonalizedInfo",
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique personalizedInfo ID. Value: the fixed string \"me\".",
          "default": "me"
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#personalizedInfo\".",
          "default": "clouddevices#personalizedInfo"
        },
        "lastUseTimeMs": {
          "type": "string",
          "description": "Timestamp of the last device usage by the user in milliseconds since epoch UTC.",
          "format": "int64"
        },
        "location": {
          "type": "string",
          "description": "Personalized device location."
        },
        "name": {
          "type": "string",
          "description": "Personalized device display name."
        }
      }
    },
    "RegistrationTicket": {
      "id": "RegistrationTicket",
      "type": "object",
      "properties": {
        "creationTimeMs": {
          "type": "string",
          "description": "Creation timestamp of the registration ticket in milliseconds since epoch UTC.",
          "format": "int64"
        },
        "deviceDraft": {
          "$ref": "Device",
          "description": "Draft of the device being registered."
        },
        "deviceId": {
          "type": "string",
          "description": "ID that device will have after registration is successfully finished."
        },
        "expirationTimeMs": {
          "type": "string",
          "description": "Expiration timestamp of the registration ticket in milliseconds since epoch UTC.",
          "format": "int64"
        },
        "id": {
          "type": "string",
          "description": "Registration ticket ID."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#registrationTicket\".",
          "default": "clouddevices#registrationTicket"
        },
        "oauthClientId": {
          "type": "string",
          "description": "OAuth 2.0 client ID of the device."
        },
        "robotAccountAuthorizationCode": {
          "type": "string",
          "description": "Authorization code that can be exchanged to a refresh token."
        },
        "robotAccountEmail": {
          "type": "string",
          "description": "E-mail address of robot account assigned to the registered device."
        },
        "userEmail": {
          "type": "string",
          "description": "Email address of the owner."
        }
      }
    },
    "StateDef": {
      "id": "StateDef",
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "properties": {
          "kind": {
            "type": "string",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#stateDef\".",
            "default": "clouddevices#stateDef"
          },
          "minimalRole": {
            "type": "string",
            "description": "Minimal role required to view state.",
            "enum": [
              "manager",
              "owner",
              "user",
              "viewer"
            ],
            "enumDescriptions": [
              "",
              "",
              "",
              ""
            ]
          },
          "name": {
            "type": "string",
            "description": "Name of the state field."
          }
        }
      }
    },
    "SubscriptionData": {
      "id": "SubscriptionData",
      "type": "object",
      "description": "Subscription template.",
      "properties": {
        "expirationTimeMs": {
          "type": "string",
          "description": "Timestamp in milliseconds since epoch when the subscription expires and new notifications stop being sent.",
          "format": "int64"
        },
        "filters": {
          "type": "array",
          "description": "Subscription event filter.",
          "items": {
            "type": "string",
            "enum": [
              "myCommands",
              "myDevices"
            ],
            "enumDescriptions": [
              "",
              ""
            ]
          }
        },
        "gcmRegistrationId": {
          "type": "string",
          "description": "GCM registration ID."
        },
        "gcmSenderId": {
          "type": "string",
          "description": "For Chrome apps must be the same as sender ID during registration, usually API project ID."
        },
        "kind": {
          "type": "string",
          "description": "Identifies what kind of resource this is. Value: the fixed string \"clouddevices#subscription\".",
          "default": "clouddevices#subscription"
        }
      }
    }
  },
  "resources": {
    "aclEntries": {
      "methods": {
        "delete": {
          "id": "clouddevices.aclEntries.delete",
          "path": "devices/{deviceId}/aclEntries/{aclEntryId}",
          "httpMethod": "DELETE",
          "description": "Deletes an ACL entry.",
          "parameters": {
            "aclEntryId": {
              "type": "string",
              "description": "Unique ACL entry ID.",
              "required": true,
              "location": "path"
            },
            "deviceId": {
              "type": "string",
              "description": "ID of the device to use.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId",
            "aclEntryId"
          ],
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "get": {
          "id": "clouddevices.aclEntries.get",
          "path": "devices/{deviceId}/aclEntries/{aclEntryId}",
          "httpMethod": "GET",
          "description": "Returns the requested ACL entry.",
          "parameters": {
            "aclEntryId": {
              "type": "string",
              "description": "Unique ACL entry ID.",
              "required": true,
              "location": "path"
            },
            "deviceId": {
              "type": "string",
              "description": "ID of the device to use.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId",
            "aclEntryId"
          ],
          "response": {
            "$ref": "AclEntry"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "insert": {
          "id": "clouddevices.aclEntries.insert",
          "path": "devices/{deviceId}/aclEntries",
          "httpMethod": "POST",
          "description": "Inserts a new ACL entry.",
          "parameters": {
            "deviceId": {
              "type": "string",
              "description": "ID of the device to use.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId"
          ],
          "request": {
            "$ref": "AclEntry"
          },
          "response": {
            "$ref": "AclEntry"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "list": {
          "id": "clouddevices.aclEntries.list",
          "path": "devices/{deviceId}/aclEntries",
          "httpMethod": "GET",
          "description": "Lists ACL entries.",
          "parameters": {
            "deviceId": {
              "type": "string",
              "description": "ID of the device to use.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "format": "uint32",
              "location": "query"
            },
            "startIndex": {
              "type": "integer",
              "format": "uint32",
              "location": "query"
            },
            "token": {
              "type": "string",
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId"
          ],
          "response": {
            "$ref": "AclEntriesListResponse"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "patch": {
          "id": "clouddevices.aclEntries.patch",
          "path": "devices/{deviceId}/aclEntries/{aclEntryId}",
          "httpMethod": "PATCH",
          "description": "Update an ACL entry. This method supports patch semantics.",
          "parameters": {
            "aclEntryId": {
              "type": "string",
              "description": "Unique ACL entry ID.",
              "required": true,
              "location": "path"
            },
            "deviceId": {
              "type": "string",
              "description": "ID of the device to use.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId",
            "aclEntryId"
          ],
          "request": {
            "$ref": "AclEntry"
          },
          "response": {
            "$ref": "AclEntry"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "update": {
          "id": "clouddevices.aclEntries.update",
          "path": "devices/{deviceId}/aclEntries/{aclEntryId}",
          "httpMethod": "PUT",
          "description": "Update an ACL entry.",
          "parameters": {
            "aclEntryId": {
              "type": "string",
              "description": "Unique ACL entry ID.",
              "required": true,
              "location": "path"
            },
            "deviceId": {
              "type": "string",
              "description": "ID of the device to use.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId",
            "aclEntryId"
          ],
          "request": {
            "$ref": "AclEntry"
          },
          "response": {
            "$ref": "AclEntry"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        }
      }
    },
    "authorizedApps": {
      "methods": {
        "list": {
          "id": "clouddevices.authorizedApps.list",
          "path": "authorizedApps",
          "httpMethod": "GET",
          "description": "The actual list of authorized apps.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "response": {
            "$ref": "AuthorizedAppsListResponse"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        }
      }
    },
    "commands": {
      "methods": {
        "cancel": {
          "id": "clouddevices.commands.cancel",
          "path": "commands/{commandId}/cancel",
          "httpMethod": "POST",
          "description": "Cancels a command.",
          "parameters": {
            "commandId": {
              "type": "string",
              "description": "Command ID.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "commandId"
          ],
          "response": {
            "$ref": "Command"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "delete": {
          "id": "clouddevices.commands.delete",
          "path": "commands/{commandId}",
          "httpMethod": "DELETE",
          "description": "Deletes a command.",
          "parameters": {
            "commandId": {
              "type": "string",
              "description": "Unique command ID.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "commandId"
          ],
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "get": {
          "id": "clouddevices.commands.get",
          "path": "commands/{commandId}",
          "httpMethod": "GET",
          "description": "Returns a particular command.",
          "parameters": {
            "attachmentPath": {
              "type": "string",
              "description": "Path to the blob inside the command, for now only two values are supported: \"parameters\" and \"results\".",
              "location": "query"
            },
            "commandId": {
              "type": "string",
              "description": "Unique command ID.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "commandId"
          ],
          "response": {
            "$ref": "Command"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ],
          "supportsMediaDownload": true
        },
        "getQueue": {
          "id": "clouddevices.commands.getQueue",
          "path": "commands/queue",
          "httpMethod": "GET",
          "description": "Returns queued commands that device is supposed to execute. This method may be used only by devices.",
          "parameters": {
            "deviceId": {
              "type": "string",
              "description": "Device ID.",
              "required": true,
              "location": "query"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId"
          ],
          "response": {
            "$ref": "CommandsQueueResponse"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "insert": {
          "id": "clouddevices.commands.insert",
          "path": "commands",
          "httpMethod": "POST",
          "description": "Creates and sends a new command.",
          "parameters": {
            "expireInMs": {
              "type": "string",
              "description": "Deprecated. Please use expirationTimeoutMs in command resource.",
              "format": "uint64",
              "location": "query"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "responseAwaitMs": {
              "type": "string",
              "description": "Number of milliseconds to wait for device response before returning.",
              "format": "uint64",
              "maximum": "25000",
              "location": "query"
            }
          },
          "request": {
            "$ref": "Command"
          },
          "response": {
            "$ref": "Command"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ],
          "supportsMediaUpload": true,
          "mediaUpload": {
            "accept": [
              "*/*"
            ],
            "maxSize": "2GB",
            "protocols": {
              "simple": {
                "multipart": true,
                "path": "/upload/clouddevices/v1/commands"
              },
              "resumable": {
                "multipart": true,
                "path": "/resumable/upload/clouddevices/v1/commands"
              }
            }
          }
        },
        "list": {
          "id": "clouddevices.commands.list",
          "path": "commands",
          "httpMethod": "GET",
          "description": "Lists all commands in reverse order of creation.",
          "parameters": {
            "byUser": {
              "type": "string",
              "description": "List all the commands issued by the user. Special value 'me' can be used to list by the current user.",
              "location": "query"
            },
            "deviceId": {
              "type": "string",
              "description": "Device ID.",
              "required": true,
              "location": "query"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "format": "uint32",
              "location": "query"
            },
            "startIndex": {
              "type": "integer",
              "format": "uint32",
              "location": "query"
            },
            "state": {
              "type": "string",
              "description": "Command state.",
              "enum": [
                "aborted",
                "cancelled",
                "done",
                "error",
                "expired",
                "inProgress",
                "queued"
              ],
              "enumDescriptions": [
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ],
              "location": "query"
            },
            "token": {
              "type": "string",
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId"
          ],
          "response": {
            "$ref": "CommandsListResponse"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "patch": {
          "id": "clouddevices.commands.patch",
          "path": "commands/{commandId}",
          "httpMethod": "PATCH",
          "description": "Updates a command. This method may be used only by devices. This method supports patch semantics.",
          "parameters": {
            "commandId": {
              "type": "string",
              "description": "Unique command ID.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "commandId"
          ],
          "request": {
            "$ref": "Command"
          },
          "response": {
            "$ref": "Command"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "update": {
          "id": "clouddevices.commands.update",
          "path": "commands/{commandId}",
          "httpMethod": "PUT",
          "description": "Updates a command. This method may be used only by devices.",
          "parameters": {
            "commandId": {
              "type": "string",
              "description": "Unique command ID.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "commandId"
          ],
          "request": {
            "$ref": "Command"
          },
          "response": {
            "$ref": "Command"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ],
          "supportsMediaUpload": true,
          "mediaUpload": {
            "accept": [
              "*/*"
            ],
            "maxSize": "2GB",
            "protocols": {
              "simple": {
                "multipart": true,
                "path": "/upload/clouddevices/v1/commands/{commandId}"
              },
              "resumable": {
                "multipart": true,
                "path": "/resumable/upload/clouddevices/v1/commands/{commandId}"
              }
            }
          }
        }
      }
    },
    "devices": {
      "methods": {
        "delete": {
          "id": "clouddevices.devices.delete",
          "path": "devices/{deviceId}",
          "httpMethod": "DELETE",
          "description": "Deletes a device from the system.",
          "parameters": {
            "deviceId": {
              "type": "string",
              "description": "Unique ID of the device.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId"
          ],
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "get": {
          "id": "clouddevices.devices.get",
          "path": "devices/{deviceId}",
          "httpMethod": "GET",
          "description": "Returns a particular device data.",
          "parameters": {
            "deviceId": {
              "type": "string",
              "description": "Unique ID of the device.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId"
          ],
          "response": {
            "$ref": "Device"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "getNotifications": {
          "id": "clouddevices.devices.getNotifications",
          "path": "devices/{deviceId}/notifications",
          "httpMethod": "GET",
          "description": "Returns pending notifications for the device. This method may be used only by devices.",
          "parameters": {
            "ack": {
              "type": "string",
              "description": "Previously received notifications ack identifier. Use special value \"auto\" for automatically ack-ing all notifications returned in the response.",
              "location": "query"
            },
            "deviceId": {
              "type": "string",
              "description": "Device ID.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId"
          ],
          "response": {
            "$ref": "DevicesGetNotificationsResponse"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "handleInvitation": {
          "id": "clouddevices.devices.handleInvitation",
          "path": "devices/{deviceId}/handleInvitation",
          "httpMethod": "POST",
          "description": "Confirms or rejects a pending device.",
          "parameters": {
            "action": {
              "type": "string",
              "description": "Action to perform on the invitation, accept or decline.",
              "required": true,
              "enum": [
                "accept",
                "decline"
              ],
              "enumDescriptions": [
                "",
                ""
              ],
              "location": "query"
            },
            "deviceId": {
              "type": "string",
              "description": "Device id.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "scopeId": {
              "type": "string",
              "description": "Scope to accept or decline invitation for.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId",
            "action",
            "scopeId"
          ],
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "insert": {
          "id": "clouddevices.devices.insert",
          "path": "devices",
          "httpMethod": "POST",
          "description": "Registers a new device. This method may be used only by aggregator devices.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "request": {
            "$ref": "Device"
          },
          "response": {
            "$ref": "Device"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "list": {
          "id": "clouddevices.devices.list",
          "path": "devices",
          "httpMethod": "GET",
          "description": "Lists devices user has access to.",
          "parameters": {
            "descriptionSubstring": {
              "type": "string",
              "description": "Device description.",
              "location": "query"
            },
            "deviceKind": {
              "type": "string",
              "description": "Device kind.",
              "enum": [
                "accessPoint",
                "aggregator",
                "camera",
                "devBoard",
                "printer",
                "scanner",
                "speaker",
                "storage",
                "toy",
                "vendor",
                "video"
              ],
              "enumDescriptions": [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ],
              "location": "query"
            },
            "displayNameSubstring": {
              "type": "string",
              "description": "Device display name. Deprecated, use 'nameSubstring' instead.",
              "location": "query"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "format": "uint32",
              "location": "query"
            },
            "nameSubstring": {
              "type": "string",
              "description": "Device name.",
              "location": "query"
            },
            "role": {
              "type": "string",
              "description": "Access role to the device.",
              "enum": [
                "manager",
                "owner",
                "robot",
                "user",
                "viewer"
              ],
              "enumDescriptions": [
                "",
                "",
                "",
                "",
                ""
              ],
              "location": "query"
            },
            "startIndex": {
              "type": "integer",
              "format": "uint32",
              "location": "query"
            },
            "systemNameSubstring": {
              "type": "string",
              "description": "Device system name. Deprecated, use 'nameSubstring' instead.",
              "location": "query"
            },
            "token": {
              "type": "string",
              "location": "query"
            }
          },
          "response": {
            "$ref": "DevicesListResponse"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "patch": {
          "id": "clouddevices.devices.patch",
          "path": "devices/{deviceId}",
          "httpMethod": "PATCH",
          "description": "Updates a device data. This method supports patch semantics.",
          "parameters": {
            "deviceId": {
              "type": "string",
              "description": "Unique ID of the device.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "lastUpdateTimeMs": {
              "type": "string",
              "description": "Previous last update time in device data. Optionally set this parameter to ensure an update call does not overwrite newer data.",
              "format": "int64",
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId"
          ],
          "request": {
            "$ref": "Device"
          },
          "response": {
            "$ref": "Device"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "patchState": {
          "id": "clouddevices.devices.patchState",
          "path": "devices/{deviceId}/patchState",
          "httpMethod": "POST",
          "description": "Applies provided patches to the device state. This method may be used only by devices.",
          "parameters": {
            "deviceId": {
              "type": "string",
              "description": "Device id.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId"
          ],
          "request": {
            "$ref": "DevicesPatchStateRequest"
          },
          "response": {
            "$ref": "DevicesPatchStateResponse"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "update": {
          "id": "clouddevices.devices.update",
          "path": "devices/{deviceId}",
          "httpMethod": "PUT",
          "description": "Updates a device data.",
          "parameters": {
            "deviceId": {
              "type": "string",
              "description": "Unique ID of the device.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "lastUpdateTimeMs": {
              "type": "string",
              "description": "Previous last update time in device data. Optionally set this parameter to ensure an update call does not overwrite newer data.",
              "format": "int64",
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId"
          ],
          "request": {
            "$ref": "Device"
          },
          "response": {
            "$ref": "Device"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "updateParent": {
          "id": "clouddevices.devices.updateParent",
          "path": "devices/{deviceId}/updateParent",
          "httpMethod": "POST",
          "description": "Updates parent of the child device. Only managers can use this method.",
          "parameters": {
            "deviceId": {
              "type": "string",
              "description": "Device ID.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "parentId": {
              "type": "string",
              "description": "New parent device ID.",
              "required": true,
              "location": "query"
            }
          },
          "parameterOrder": [
            "deviceId",
            "parentId"
          ],
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        }
      }
    },
    "events": {
      "methods": {
        "list": {
          "id": "clouddevices.events.list",
          "path": "events",
          "httpMethod": "GET",
          "description": "Lists events.",
          "parameters": {
            "commandId": {
              "type": "string",
              "description": "Affected command id.",
              "repeated": true,
              "location": "query"
            },
            "deviceId": {
              "type": "string",
              "description": "Sending or affected device id.",
              "repeated": true,
              "location": "query"
            },
            "endTimeMs": {
              "type": "string",
              "description": "End of time range in ms since epoch.",
              "format": "int64",
              "location": "query"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "format": "uint32",
              "location": "query"
            },
            "startIndex": {
              "type": "integer",
              "format": "uint32",
              "location": "query"
            },
            "startTimeMs": {
              "type": "string",
              "description": "Start of time range in ms since epoch.",
              "format": "int64",
              "location": "query"
            },
            "token": {
              "type": "string",
              "location": "query"
            },
            "type": {
              "type": "string",
              "description": "Event type.",
              "enum": [
                "commandCancelled",
                "commandCreated",
                "commandDeleted",
                "commandExpired",
                "commandUpdated",
                "deviceAclUpdated",
                "deviceConnectivityChange",
                "deviceCreated",
                "deviceDeleted",
                "deviceUpdated",
                "deviceUseTimeUpdated"
              ],
              "enumDescriptions": [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ],
              "location": "query"
            }
          },
          "response": {
            "$ref": "EventsListResponse"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        }
      }
    },
    "modelManifests": {
      "methods": {
        "get": {
          "id": "clouddevices.modelManifests.get",
          "path": "modelManifests/{modelManifestId}",
          "httpMethod": "GET",
          "description": "Returns a particular model manifest.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "modelManifestId": {
              "type": "string",
              "description": "Unique ID of the model manifest.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "modelManifestId"
          ],
          "response": {
            "$ref": "ModelManifest"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "list": {
          "id": "clouddevices.modelManifests.list",
          "path": "modelManifests",
          "httpMethod": "GET",
          "description": "Lists all model manifests.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "ids": {
              "type": "string",
              "description": "Model manifest IDs to include in the result",
              "repeated": true,
              "location": "query"
            },
            "maxResults": {
              "type": "integer",
              "format": "uint32",
              "location": "query"
            },
            "startIndex": {
              "type": "integer",
              "format": "uint32",
              "location": "query"
            },
            "token": {
              "type": "string",
              "location": "query"
            }
          },
          "response": {
            "$ref": "ModelManifestsListResponse"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "validateCommandDefs": {
          "id": "clouddevices.modelManifests.validateCommandDefs",
          "path": "modelManifests/validateCommandDefs",
          "httpMethod": "POST",
          "description": "Validates given command definitions and returns errors.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "request": {
            "$ref": "ModelManifestsValidateCommandDefsRequest"
          },
          "response": {
            "$ref": "ModelManifestsValidateCommandDefsResponse"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "validateDeviceState": {
          "id": "clouddevices.modelManifests.validateDeviceState",
          "path": "modelManifests/validateDeviceState",
          "httpMethod": "POST",
          "description": "Validates given device state object and returns errors.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "request": {
            "$ref": "ModelManifestsValidateDeviceStateRequest"
          },
          "response": {
            "$ref": "ModelManifestsValidateDeviceStateResponse"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        }
      }
    },
    "personalizedInfos": {
      "methods": {
        "get": {
          "id": "clouddevices.personalizedInfos.get",
          "path": "devices/{deviceId}/personalizedInfos/{personalizedInfoId}",
          "httpMethod": "GET",
          "description": "Returns the personalized info for device.",
          "parameters": {
            "deviceId": {
              "type": "string",
              "description": "ID of the device to use.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "personalizedInfoId": {
              "type": "string",
              "description": "Personalized info ID. It should always be \"me\".",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "deviceId",
            "personalizedInfoId"
          ],
          "response": {
            "$ref": "PersonalizedInfo"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "patch": {
          "id": "clouddevices.personalizedInfos.patch",
          "path": "devices/{deviceId}/personalizedInfos/{personalizedInfoId}",
          "httpMethod": "PATCH",
          "description": "Update the personalized info for device. This method supports patch semantics.",
          "parameters": {
            "deviceId": {
              "type": "string",
              "description": "ID of the device to use.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "personalizedInfoId": {
              "type": "string",
              "description": "Personalized info ID. It should always be \"me\".",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "deviceId",
            "personalizedInfoId"
          ],
          "request": {
            "$ref": "PersonalizedInfo"
          },
          "response": {
            "$ref": "PersonalizedInfo"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "update": {
          "id": "clouddevices.personalizedInfos.update",
          "path": "devices/{deviceId}/personalizedInfos/{personalizedInfoId}",
          "httpMethod": "PUT",
          "description": "Update the personalized info for device.",
          "parameters": {
            "deviceId": {
              "type": "string",
              "description": "ID of the device to use.",
              "required": true,
              "location": "path"
            },
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "personalizedInfoId": {
              "type": "string",
              "description": "Personalized info ID. It should always be \"me\".",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "deviceId",
            "personalizedInfoId"
          ],
          "request": {
            "$ref": "PersonalizedInfo"
          },
          "response": {
            "$ref": "PersonalizedInfo"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        }
      }
    },
    "registrationTickets": {
      "methods": {
        "finalize": {
          "id": "clouddevices.registrationTickets.finalize",
          "path": "registrationTickets/{registrationTicketId}/finalize",
          "httpMethod": "POST",
          "description": "Finalizes device registration and returns its credentials. This method may be used only by devices.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "registrationTicketId": {
              "type": "string",
              "description": "ID of the registration ticket to finalize.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "registrationTicketId"
          ],
          "response": {
            "$ref": "RegistrationTicket"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "get": {
          "id": "clouddevices.registrationTickets.get",
          "path": "registrationTickets/{registrationTicketId}",
          "httpMethod": "GET",
          "description": "Returns an existing registration ticket.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "registrationTicketId": {
              "type": "string",
              "description": "Unique ID of the registration ticket.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "registrationTicketId"
          ],
          "response": {
            "$ref": "RegistrationTicket"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "insert": {
          "id": "clouddevices.registrationTickets.insert",
          "path": "registrationTickets",
          "httpMethod": "POST",
          "description": "Creates a new registration ticket.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "request": {
            "$ref": "RegistrationTicket"
          },
          "response": {
            "$ref": "RegistrationTicket"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "patch": {
          "id": "clouddevices.registrationTickets.patch",
          "path": "registrationTickets/{registrationTicketId}",
          "httpMethod": "PATCH",
          "description": "Updates an existing registration ticket. This method supports patch semantics.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "registrationTicketId": {
              "type": "string",
              "description": "Unique ID of the registration ticket.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "registrationTicketId"
          ],
          "request": {
            "$ref": "RegistrationTicket"
          },
          "response": {
            "$ref": "RegistrationTicket"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        },
        "update": {
          "id": "clouddevices.registrationTickets.update",
          "path": "registrationTickets/{registrationTicketId}",
          "httpMethod": "PUT",
          "description": "Updates an existing registration ticket.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            },
            "registrationTicketId": {
              "type": "string",
              "description": "Unique ID of the registration ticket.",
              "required": true,
              "location": "path"
            }
          },
          "parameterOrder": [
            "registrationTicketId"
          ],
          "request": {
            "$ref": "RegistrationTicket"
          },
          "response": {
            "$ref": "RegistrationTicket"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        }
      }
    },
    "subscriptions": {
      "methods": {
        "subscribe": {
          "id": "clouddevices.subscriptions.subscribe",
          "path": "subscriptions/subscribe",
          "httpMethod": "POST",
          "description": "Subscribes the authenticated user and application to receiving notifications.",
          "parameters": {
            "hl": {
              "type": "string",
              "description": "Specifies the language code that should be used for text values in the API response.",
              "location": "query"
            }
          },
          "request": {
            "$ref": "SubscriptionData"
          },
          "response": {
            "$ref": "SubscriptionData"
          },
          "scopes": [
            "https://www.googleapis.com/auth/clouddevices",
            "https://www.googleapis.com/auth/clouddevices.install"
          ]
        }
      }
    }
  }
}