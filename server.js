const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.render('index', {
        newTitle: null
    });
})

app.post('/', function (req, res) {

    const prep = ['a', 'aboard', 'about', 'above', 'across', 'after', 'against', 'along', 'amid', 'among', 'anti', 'around', 'as', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'besides', 'between', 'beyond', 'but', 'by', 'concerning', 'considering', 'despite', 'down', 'during', 'except', 'excepting', 'excluding', 'following', 'for', 'from', 'in', 'inside', 'into', 'like', 'minus', 'near', 'of', 'off', 'on', 'onto', 'opposite', 'outside', 'over', 'past', 'per', 'plus', 'regarding', 'round', 'save', 'since', 'than', 'the', 'this', 'through', 'to', 'toward', 'towards', 'under', 'underneath', 'unlike', 'until', 'up', 'upon', 'versus', 'via', 'with', 'within', 'without'];

    let titleArray = req.body.title.toLowerCase().split(" ");

    // .split(/\r\n/);

    let wordArray = [];

    titleArray.forEach(element => {
        wordArray.push(element.split(" "));
    });

    console.log(wordArray);

    for (word in titleArray) {
        if (prep.includes(titleArray[word]) === false) {

            //Change all non-prep words into uppercase
            titleArray[word] = titleArray[word].replace(/(\w)/, function (x) {
                return x.toUpperCase();
            });

            //Change all hypenated words into uppercase
            titleArray[word] = titleArray[word].replace(/(-\w)/, function (y) {
                return y.toUpperCase();
            });

        }
    }

    //Capitalize the first letter of the title
    newTitle = titleArray.join(" ").replace(/\w/, function (x) {
        return x.toUpperCase();
    })

    res.render('index', {
        newTitle: newTitle
    });



})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})