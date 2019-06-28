const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    console.log('get', res.locals.style);
    res.render('index', {
        newTitle: null,
        titleNumber: 0,
        style: null
    });
})

app.get('/result', (req, res) => {
    console.log('get result', app.locals.style, app.locals.titles);
    res.render('result', {
        newTitle: app.locals.titles,
        style: app.locals.style,
        titleNumber: app.locals.num
    });
})


app.post('/', (req, res) => {

    let titles = capTitles(req.body.title);

    app.locals.titles = titles[0];
    app.locals.style = req.body.style;
    app.locals.num = titles[1];

    //  Rejoin titles to return to box
    // finalTitle = finalTitle.join("\r\n");

    // res.render('result', {
    //     newTitle: finalTitle,
    //     style: style,
    //     titleNumber: titleNum
    // });


    res.redirect('/result');


    // for (title in wordArray) {
    //     for (word in wordArray[title]) {
    //         if (prep.includes(wordArray[title][word]) === false) {

    //             //Change all non-prep words into uppercase
    //             wordArray[title][word] = wordArray[title][word].replace(/(\w)/, function (x) {
    //                 return x.toUpperCase();
    //             });

    //             //Change all hypenated words into uppercase
    //             wordArray[title][word] = wordArray[title][word].replace(/(-\w)/, function (y) {

    //                 return y.toUpperCase();
    //             });

    //         }

    //         if (style == "ap") {
    //             if (wordArray[title][word].length > 3) {
    //                 wordArray[title][word] = wordArray[title][word].replace(/(\w)/, function (x) {
    //                     return x.toUpperCase();
    //                 });
    //             }
    //         }
    //     }
    // }




    // }

    // Uppercase letters after colons
    // for (x in finalTitle) {
    //     finalTitle[x] = finalTitle[x].replace(/:.(\w)/, function (y) {
    //         return y.toUpperCase();
    //     });
    // }







    // Render the template with the new data
    // res.render('result', {
    //     titleNumber: titleNum,
    //     newTitle: finalTitle,
    //     style: style
    // })



})

app.listen(3000, function () {
    console.log(`Hey butthole, app running on 3000`)
})


function capTitles(titles) {

    const prep = ['aboard', 'about', 'above', 'across', 'after', 'against', 'along', 'amid', 'among', 'and', 'anti', 'around', 'as', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'besides', 'between', 'beyond', 'but', 'by', 'c.', 'ca.', 'concerning', 'considering', 'de', 'despite', 'down', 'during', 'except', 'excepting', 'excluding', 'following', 'for', 'from', 'in', 'inside', 'into', 'like', 'minus', 'near', 'of', 'off', 'nor', 'on', 'onto', 'opposite', 'or', 'outside', 'over', 'past', 'per', 'plus', 'regarding', 'round', 'save', 'since', 'than', 'this', 'through', 'to', 'toward', 'towards', 'under', 'underneath', 'unlike', 'until', 'up', 'upon', 'versus', 'via', 'von', 'with', 'within', 'without'];

    const coordConj = ['and', 'but', 'for', 'nor', 'or', 'so', 'yet'];

    const articles = ['a', 'an', 'the'];

    const spec = ['ADA',
        'AKA',
        'ATM',
        'AWOL',
        'BC',
        'BCE',
        'BYOB',
        'CE',
        'CIA',
        'DIY',
        'DOB',
        'EFL',
        'ESL',
        'ETA',
        'FAQ',
        'FYI',
        'GMO',
        'HR',
        'ID',
        'II',
        'III',
        'IQ',
        'IV',
        'IX',
        'MD',
        'MIA',
        'OCD',
        'OG',
        'PC',
        'POW',
        'PR',
        'PR',
        'PS',
        'RIP',
        'RSVP',
        'SOL',
        'SOS',
        'TBA',
        'TGIF',
        'V',
        'VI',
        'VII',
        'VIII',
        'WWI',
        'WWII',
        'X',
        'e.g.',
        'i.e.'
    ];

    const specSearch = spec.map(element => element.toLowerCase());

    // Define selected style

    let finalTitle = [];

    //  Split titles into an array, remove blank lines
    let oldTitle = titles;

    let titleArray = oldTitle.toLowerCase().split(/\r\n/).filter(title => title != '');


    //  Number of titles sent
    let titleNum = titleArray.length;

    // Capitalize each word of the sentence
    titleArray.forEach((el, index) => {
        return titleArray[index] = el.trim().replace(/(\s\w)|(^\w)|(-\w)/g, title => title.toUpperCase());
    })

    //  Add words of title to an array
    let wordArray = [];

    titleArray.forEach(element => {
        wordArray.push(element.split(" "));
    });

    // Modify special words
    for (title in wordArray) {
        for (word in wordArray[title]) {
            let specIndex = specSearch.indexOf(wordArray[title][word].toLowerCase());
            if (specIndex > 0) {
                wordArray[title][word] = spec[specIndex];
            }
        }
    }

    // Lowercase prepositions and articles
    for (title in wordArray) {
        for (word in wordArray[title]) {
            if ([...prep, ...articles].includes(wordArray[title][word].toLowerCase())) {
                wordArray[title][word] = wordArray[title][word].toLowerCase();
            }
        }
    }

    //Uppercase post hyphen
    for (title in wordArray) {
        for (word in wordArray[title]) {
            wordArray[title][word] = wordArray[title][word].replace(/-(\w)/, word => word.toUpperCase());
        }
    }

    //  Uppercase first letter of every title


    for (word in wordArray) {
        finalTitle.push(wordArray[word].join(" ").replace(/\w/, firstLet => firstLet.toUpperCase()));
    }

    return [finalTitle, titleNum];
}