const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// get 
// @public
// get all blogs
router.get('/blog/blogs', async (req, res) => {
    try {
        const allBlogs = await Blog.find();
        res.status(201).json({ success: true, data: allBlogs });
    }
    catch (err) {
        res.status(501).json({ success: false, message: err.message });
    }
});

// post
// @public
// create a blog
router.post('/blog/create', async (req, res) => {
    try {
        const { title, description, image } = req.body;
        await Blog.create({ title, description, image });
        res.status(201).json({ success: true, message: 'Blog added Successfully!!' });
    }
    catch (err) {
        res.status(501).json({ success: false, message: err.message });
    }
})

// patch
// @public
// update a blog
router.patch('/blog/:id/edit', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image } = req.body;
        await Blog.findByIdAndUpdate(id, { title, description, image });
        res.status(201).json({ success: true, message: 'Blog updated successfully!!' });
    }
    catch (error) {
        res.status(501).json({ success: false, message: error.message });
    }
});

// get
// @public
// find a blog
router.get('/blog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById({ _id: id });
        res.status(201).json({ success: true, data: blog });
    }
    catch (error) {
        res.status(501).json({ success: false, message: error.message });
    }
})

// delete
// @public
// delete a blog
router.delete('/blog/:id/delete', async (req, res) => {
    try {
        const { id } = req.params;
        await Blog.findByIdAndDelete({ _id: id });
        res.status(201).json({ success: true, message: 'Blog deleted successfully!!!' });
    }
    catch (error) {
        res.status(501).json({ success: false, message: error.message });
    }
});

module.exports = router;