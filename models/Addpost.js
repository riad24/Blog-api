/**
 * Created by Riad Mahmud on 2/13/2017.
 */
var mongoose = require('mongoose');
// blog Schema
var bolgSchema = mongoose.Schema({
    title: {
        type: String
    },
    category:{
        type: String
    },
    author:{
        type: String
    },
    description:{
        type:String
    },
    date:{
        type:Date
    }
},{collection:'posttable'});

var Blog = module.exports = mongoose.model('Post',bolgSchema);
var BlogItem ={};
//Get Post
BlogItem.getBlogs = function (callback) {
    Blog.find(callback);
};
BlogItem.getPostLimt = function (callback,limit) {
    Blog.find(callback).limit(2);
};
BlogItem.getSearchs = function (blog,callback) {
    
    var search =
    { $match: { $text: { $search: "\""+blog+"\"" } } };

    Blog.aggregate(search,callback)
};
BlogItem.getCategoryCount = function (callback) {
        var count = {
            $group: {
                _id: '$category',  //$category is the column name in collection
                count: {$sum: 1}
            }
        };
    Blog.aggregate(count,callback)

};
BlogItem.getPostCount = function (callback) {
    Blog.count(callback)

};
//categoryPost Get Id
BlogItem.categoryPost = function (blog,callback) {
    var bb = {category:blog};
    Blog.find(bb,callback);
};
//Post details Get Id
BlogItem.getPostdetailsById = function (blog,callback) {
    var bb = {_id:blog};
    Blog.find(bb,callback);
};

//Add post
BlogItem.addBlog = function (blog,callback) {
    Blog.create(blog,callback);
};

//update Post
BlogItem.updateBlog = function (id,blog,callback) {
    var query = {_id: id};
    var update = {
        title:blog.title,
        description:blog.description,
        category:blog.category,
        author:blog.author,
        date:blog.date
    };
    Blog.findOneAndUpdate(query,update,callback);
};
//Delete post
BlogItem.removeBlog = function (id,callback) {
    var query = {_id: id};

    Blog.remove(query,callback);
};

module.exports = BlogItem;