/**
 * Created by Riad Mahmud on 4/29/2017.
 */
var Blog =require('../../models/Addpost.js');

var BlogItem ={};

BlogItem.getPost = function (req,res) {
    Blog.getBlogs(function (err,blog) {
        if(err)
            throw err;{
        }
        res.json(blog);
    });
};
BlogItem.getPostlimt = function (req,res) {
    Blog.getPostLimt(function (err,blog) {
        if(err)
            throw err;{
        }
        res.json(blog);
    });
};
BlogItem.getsearch = function (req,res) {
    var blog =req.params.id;
    console.log(blog);
    Blog.getSearchs(blog,function (err,blog) {
        if(err)
            throw err;{
        }
        res.json(blog);
    });
};
BlogItem.getpostCount = function (req,res) {
    Blog.getPostCount(function (err,count) {
        if(err)
            throw err;{
        }
        res.json(count);
    });
};
BlogItem.getcategoryCount = function (req,res) {
    Blog.getCategoryCount(function (err,count) {
        if(err)
            throw err;{
        }
        res.json(count);
    });
};
BlogItem.addPost = function (req,res) {
    var blog = req.body;
    console.log('check data');
    console.log(blog);
    Blog.addBlog(blog,function (err,blog) {
        if(err){
            throw err;
        }
        res.json(blog);
    });
};

//Blog put
BlogItem.PostPut =function (req,res) {
    var id = req.params._id;
    var blog = req.body;
    console.log(blog);
    Blog.updateBlog(id, blog, function (err,blog) {
        if(err){
            throw err;
        }
        res.json(blog);
    });
};
//Blog delete
BlogItem.PostDelete = function (req,res) {
    var id = req.params._id;
    Blog.removeBlog(id, function (err,blog) {
        if(err){
            throw err;
        }
        res.json(blog);
    });
};
// categoryPost get Id
BlogItem.PostGetID = function (req,res) {
    var blog =req.params.id;
    console.log(blog);
    Blog.categoryPost(blog,function (err,blog) {
        if(err){
            throw err;
        }
        res.json(blog);
    });
};
// Post details GetID
BlogItem.detailsPostGetID = function (req,res) {
    var blog =req.params.id;
    console.log(blog);
    Blog.getPostdetailsById(blog,function (err,blog) {
        if(err){
            throw err;
        }
        res.json(blog);
    });
};

module.exports = BlogItem;
