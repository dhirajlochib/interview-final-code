//user routes
import React from 'react';
import { Route, Switch, BrowserRouter, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter();

router.get('/login', (req, res) => {
    res.send('Hello World!');
});
