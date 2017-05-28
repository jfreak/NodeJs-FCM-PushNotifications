/**
 * Created by jfreak on 5/28/2017.
 */




var FCM = require('fcm-node');
var serverKey = 'Server Key found in FCM'; //put your server key here
var fcm = new FCM(serverKey);


exports.sendNotification = function (req, res) {

    var message = {
        to: 'device tokens or topics', // required fill with device token or topics
        collapse_key: 'New Notification',// Characterising notifcations
        "data": {
            "title": "Large Icon", //Title
            "message": "Some message", //Message
            // "image": "any image url", // Display image instead of icons
            // "image-type":"circular", // for circular image icons
            // "soundname": "ringtone", // For sound
            // style: 'inbox', // for notification to stack like android inbox app
            // summaryText: 'There are %n% notifications', // to show count of notications
            // actions: [
            //     { icon: "emailGuests", title: "EMAIL GUESTS", callback: "app.emailGuests", foreground: true},
            //     { icon: "snooze", title: "SNOOZE", callback: "app.snooze", foreground: false},
            // ], // to show actions buttons with notications
            // "foreground": false,
            // style: "picture",
            // picture: "url", // to send pictures in notications using the able style method to display
            // "priority": 2, // Values (-2: min, -1: low, 0: default, 1: high, 2: Max)
            // "content-available": 1, // Background notications
            // "force-start": 1, //application will be restarted in background even if it was force closed.
        }
    };

//callback style
    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });


};