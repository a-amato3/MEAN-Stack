const express = require('express');

const app = express();


app.use('/api/posts', (req, res, next) => {
    const posts = [
        {
        id: '123532',
        title: 'First server-side post',
        content: 'This is coming form the server'
        },
        {    
        id: 'fassdf4',
        title: 'Second server-side post',
        content: 'This is coming form the server'
        }
    ];
    res.json({
        message: 'Posts fetched successfully!',
        posts: posts
    });
});

export = app;
