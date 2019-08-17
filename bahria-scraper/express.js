const express = require('express');
const app = express();
const Scraper = require('./app');
const fs = require('fs');


app.get('/', (req, res) => {

    res.json({
        message: 'Hello',
        url: 'http://localhost:3000/search/buic/cs'
    })

})
app.get('/search/:campus/:dept', (req, res) => {
    console.log(req.params.campus);
    Scraper.getTeachers(req.params.campus, req.params.dept).then(Profiles => {
        fs.writeFile('teacher.json', Teachers, 'utf-8', (err) => {
            if (err) throw err;
            console.log('Data Written!');
        })
        res.json({
            Profiles
        })
    });
});

console.log("Hello");

app.listen(3000);