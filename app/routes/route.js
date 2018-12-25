/**
 * Created by Riad Mahmud on 3/21/2017.
 */
        // Blog post api require =================
        var Blog = require('../api/navName');
        var Addpost = require('../api/Addpost');
        var categoryPost = require('../api/category');
        module.exports = function(app) {
        // server routes ===========================================================
                
        app.get('/navGet',Blog.getNav);
        app.get('/navGetid/:_id',Blog.NavGetID);
        app.post('/navpost',Blog.NavPost);
        app.put('/navUpdet/:_id',Blog.NavPut);
        app.delete('/navDelete/:_id',Blog.NavDelete);
                
        //Blog Post route ========================================     
        app.get('/PostGet',Addpost.getPost);
        app.get('/PostGetlimt',Addpost.getPostlimt);
        app.get('/PostGetcount',Addpost.getpostCount);
        app.get('/CategoryGetcount',Addpost.getcategoryCount);
        app.get('/categoryPost/:id',Addpost.PostGetID);
        app.get('/detailsPost/:id',Addpost.detailsPostGetID);
                app.get('/searchGet/:id',Addpost.getsearch);
                
        app.post('/PostAdd',Addpost.addPost);
        app.put('/PostUpdet/:_id',Addpost.PostPut);
        app.delete('/PostDelete/:_id',Addpost.PostDelete);
                
        //category Post route ========================================     
        app.get('/categoryGet',categoryPost.getCat);
        app.get('/categoryGetid/:_id',categoryPost.CatGetID);
        app.post('/categoryAdd',categoryPost.addCat);
        app.put('/categoryUpdet/:_id',categoryPost.catPut);
        app.delete('/categoryDelete/:_id',categoryPost.catDelete); 
                
     };

