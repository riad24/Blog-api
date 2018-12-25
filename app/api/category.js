/**
 * Created by Riad Mahmud on 5/9/2017.
 */
/**
 * Created by Riad Mahmud on 4/29/2017.
 */
var Blog =require('../../models/category.js');

var CategoryItem ={};

CategoryItem.getCat = function (req,res) {
    Blog.getBlogs(function (err,blog) {
        if(err)
            throw err;{
        }
        res.json(blog);
    });
};
CategoryItem.addCat = function (req,res) {
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
CategoryItem.catPut =function (req,res) {
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
CategoryItem.catDelete = function (req,res) {
    var id = req.params._id;
    Blog.removeBlog(id, function (err,blog) {
        if(err){
            throw err;
        }
        res.json(blog);
    });
};
//Blog get Id
CategoryItem.CatGetID = function (req,res) {
    Blog.getBlogById(req.params._id,function (err,blog) {
        if(err){
            throw err;
        }
        res.json(blog);
    });
};

module.exports = CategoryItem;
