/**
 * Created by Riad Mahmud on 5/9/2017.
 */
/**
 * Created by Riad Mahmud on 2/13/2017.
 */
var mongoose = require('mongoose');
// blog Schema
var categorySchema = mongoose.Schema({
  
    category:{
        type: String
    }
   
},{collection:'category'});

var Blog = module.exports = mongoose.model('cat',categorySchema);
var CategoryItem ={};
//Get Post
CategoryItem.getBlogs = function (callback,limit) {
    Blog.find(callback).limit(limit);
};
//get post Id
CategoryItem.getBlogById = function (id,callback) {
    Blog.findById(id,callback);
};
//Add post
CategoryItem.addBlog = function (blog,callback) {
    Blog.create(blog,callback);
};
//update Post
CategoryItem.updateBlog = function (id,blog,callback) {
    var query = {_id: id};
    var update = {
        title:blog.title,
        category:blog.category,
        author:blog.author
    };
    Blog.findOneAndUpdate(query,update,callback);
};
//Delete post
CategoryItem.removeBlog = function (id,callback) {
    var query = {_id: id};

    Blog.remove(query,callback);
};

module.exports = CategoryItem;