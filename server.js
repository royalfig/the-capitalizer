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
        newTitle: null,
        titleNumber: 0,
        style: null
    });
})

app.post('/', function (req, res) {

    const prep = ['a', 'aboard', 'about', 'above', 'across', 'after', 'against', 'along', 'amid', 'among', 'an', 'and', 'anti', 'around', 'as', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'besides', 'between', 'beyond', 'but', 'by', 'c.', 'ca.', 'concerning', 'considering', 'de', 'despite', 'down', 'during', 'except', 'excepting', 'excluding', 'following', 'for', 'from', 'in', 'inside', 'into', 'like', 'minus', 'near', 'of', 'off', 'nor', 'on', 'onto', 'opposite', 'or', 'outside', 'over', 'past', 'per', 'plus', 'regarding', 'round', 'save', 'since', 'than', 'the', 'this', 'through', 'to', 'toward', 'towards', 'under', 'underneath', 'unlike', 'until', 'up', 'upon', 'versus', 'via', 'von', 'with', 'within', 'without'];

    const coordConj = ['and', 'but', 'for', 'nor', 'or', 'so', 'yet'];
console.log(req.body);
    // Define selected style
    let style = req.body.style;

    //  Split titles into an array
    let titleArray = req.body.title.toLowerCase().split(/\r\n/);

    //  Number of titles sent 
    let titleNum = titleArray.length;

    //  Add words of title to an array
    let wordArray = [];

    titleArray.forEach(element => {
        wordArray.push(element.split(" "));
    });

    for (title in wordArray) {
        for (word in wordArray[title]) {
            if (prep.includes(wordArray[title][word]) === false) {

                //Change all non-prep words into uppercase
                wordArray[title][word] = wordArray[title][word].replace(/(\w)/, function (x) {
                    return x.toUpperCase();
                });

                //Change all hypenated words into uppercase
                wordArray[title][word] = wordArray[title][word].replace(/(-\w)/, function (y) {

                    return y.toUpperCase();
                });

            }

            if (style == "ap") {
                if (wordArray[title][word].length > 3) {
                    wordArray[title][word] = wordArray[title][word].replace(/(\w)/, function (x) {
                        return x.toUpperCase();
                    });
                }
            }
        }
    }

    //  Uppercase first letter of every title
    let finalTitle = [];

    for (x in wordArray) {

        finalTitle.push(wordArray[x].join(" ").replace(/\w/, function (x) {
            return x.toUpperCase();
        }));

        

    }

    // Uppercase letters after colons
    for (x in finalTitle) {
        finalTitle[x] = finalTitle[x].replace(/:.(\w)/, function (y) {
            return y.toUpperCase();
        });
    }





    //  Rejoin titles to return to box
    finalTitle = finalTitle.join("\r\n");

    // Render the template with the new data
    res.render('index', {
        titleNumber: titleNum,
        newTitle: finalTitle,
        style: style
    });



})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})