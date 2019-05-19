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
        titleNumber: null
    });
})
app.post('/', function (req, res) {

    const prep = ['a', 'aboard', 'about', 'above', 'across', 'after', 'against', 'along', 'amid', 'among', 'an', 'and', 'anti', 'around', 'as', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'besides', 'between', 'beyond', 'but', 'by', 'ca', 'concerning', 'considering', 'de', 'despite', 'down', 'during', 'except', 'excepting', 'excluding', 'following', 'for', 'from', 'in', 'inside', 'into', 'like', 'minus', 'near', 'of', 'off', 'nor', 'on', 'onto', 'opposite', 'or', 'outside', 'over', 'past', 'per', 'plus', 'regarding', 'round', 'save', 'since', 'than', 'the', 'this', 'through', 'to', 'toward', 'towards', 'under', 'underneath', 'unlike', 'until', 'up', 'upon', 'versus', 'via', 'von', 'with', 'within', 'without'];

    // if (/\r\n/.test(req.body.title) === true) {
    //     console.log("This is multiple titles");
    // } else {
    //     console.log("This is a single title");
    // }

    // let test = req.body.title.toLowerCase().split(/\r\n/);
    // let testA = [];

    // test.forEach(element => {
    //     testA.push(element.split(" "))
    //     console.log(testA);
    // })

    console.log(req.body.title);
    let titleArray = req.body.title.toLowerCase().split(/\r\n/);
    // .split(/\r\n/);

    // titleNum = titleArray.length;
    // titleNum = titleArray.length;
    let titleNum = titleArray.length;
    console.log(titleNum);
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
        }
    }


    let finalTitle = [];

    for (x in wordArray) {

        finalTitle.push(wordArray[x].join(" ").replace(/\w/, function (x) {
            return x.toUpperCase();
        }))
    }
    finalTitle = finalTitle.join("\r\n");

    // let newTitle = titleArray.join(" ");
    // let multiTitle = [];

    // newTitle.forEach(element => {
    //     multiTitle.push(element.replace(/\w/, function (x) {
    //         return x.toUpperCase()
    //     }));
    // })

    // // console.log(multiTitle);

    // //Capitalize the first letter of the title
    // newTitle = titleArray.join(" ").replace(/\w/, function (x) {
    //     return x.toUpperCase();
    // })

    res.render('index', {
        titleNumber: titleNum,
        newTitle: finalTitle
    });

    // res.render('index', {
    //     newTitle: finalTitle

    // });

    // console.log(newTitle)

})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})