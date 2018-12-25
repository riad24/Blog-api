    /**
     * Created by Riad Mahmud on 2/13/2017.
     */
    var mongoose = require('mongoose');
    // blog Schema
    var bolgSchema = mongoose.Schema({
        navName: {
            type: String
        }
    },{collection:'navbar'});
    
    var Blog = module.exports = mongoose.model('Blog',bolgSchema);
    var BlogItem ={};
    //Get Blog
    BlogItem.getNavb = function (callback,limit) {
        Blog.find(callback).limit(limit);
    };
    //get Blogo Id
    BlogItem.getNavbById = function (id,callback) {
        Blog.findById(id,callback);
    };
    //Add Blogo
    BlogItem.addNavb = function (blog,callback) {
        Blog.create(blog,callback);
    };
    //update Blog
    BlogItem.updateNavb = function (id,blog,options,callback) {
        var query = {_id: id};
        var update = {
            navName:blog.navName
        };
        Blog.findOneAndUpdate(query,update,options,callback);
    };
    //Delete Blog
    BlogItem.removeNavb = function (id,callback) {
        var query = {_id: id};
       
        Blog.remove(query,callback);
    };

    module.exports = BlogItem;