    /**
     * Created by Riad Mahmud on 3/21/2017.
     */
    //Blog post models require =========================
    var Blog =require('../../models/navName.js');

    var BlogItem ={};
    
    BlogItem.getNav = function (req,res) {
            Blog.getNavb(function (err,blog) {
                if(err)
                    throw err;{
                }
                res.json(blog);
            });
    };
    BlogItem.NavPost = function (req,res) {
            var blog = req.body;
           console.log('check data');
           console.log(blog);
        Blog.addNavb(blog,function (err,blog) {
                if(err){
                    throw err;
                }
                res.json(blog);
            });
        };
        //Blog put
    BlogItem.NavPut =function (req,res) {
            var id = req.params._id;
            var blog = req.body;
            Blog.updateNavb(id ,blog, {}, function (err,blog) {
                if(err){
                    throw err;
                }
                res.json(blog);
            });
    };
        //Blog delete
    BlogItem.NavDelete = function (req,res) {
            var id = req.params._id;
            Blog.removeNavb(id, function (err,blog) {
                if(err){
                    throw err;
                }
                res.json(blog);
            });
    };
        //Blog get Id
    BlogItem.NavGetID = function (req,res) {
            Blog.getNavbById(req.params._id,function (err,blog) {
                if(err){
                    throw err;
                }
                res.json(blog);
            });
    };
    
    module.exports = BlogItem;