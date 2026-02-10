// Creation of server
const express = require('express');

const app = express();

module.exports = app;

const notes = [];

app.post('/notes', (req, res) => {
    console.log(req.body )
});
/*
note = {
    title: "My first note",
    description: "This is a note"
}

const notes = [
    {
        title: "My first note",
        description: "This is a note"
    },
    {
        title: "My second note",
        description: "This is a note"
    }
]
*/