/**
 * Created by jfreak on 5/28/2017.
 */
var notications = require('../controllers/sendnotification.controller');

module.exports = function(app) {



    app.post('/api/send/notication',notications.sendNotification);


};