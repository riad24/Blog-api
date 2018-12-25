/**
 * Created by Riad Mahmud on 3/21/2017.
 */

        var mongoose = require('mongoose');
        var DBurl = 'mongodb://localhost/blogdb';
        mongoose.connect(DBurl);
        var db = mongoose.connection;