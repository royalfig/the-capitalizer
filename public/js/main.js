//Copy to clipboard

//Add event handler for click
if (document.getElementById('copy-button')) {
  document.getElementById("copy-button").addEventListener("click", textCopy);
}



//Function to copy text
function textCopy() {
  let copyText = document.querySelectorAll('.cap-result');

  let titles = [];

  copyText.forEach(x => {
    titles.push(x.innerText);
  })

  // range.selectNode(copyText[0]);
  console.log(titles.join("\n"));

  function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(function () {
      alert(`${copyText.length} titles copied, dawg`);
    }, function () {
      /* clipboard write failed */
    });
  }

  updateClipboard(titles.join("\n"));
  // document.execCommand(titles);




}

// Change text appearance for style selection
// const styleButtons = document.getElementsByName('style');

// // styleButtons.forEach(x => {

// //   x.addEventListener('change', function () {

// //     const ap = document.querySelector("#ap");
// //     const apa = document.querySelector("#apa");
// //     const cms = document.querySelector("#cms");
// //     const mla = document.querySelector("#mla");

// //     const styleDescriptions = document.getElementsByClassName('style-rules');

// //     (ap.checked) ? (ap.nextElementSibling.innerHTML = "Associated Press", styleDescriptions[0].style.display = 'block') : (ap.nextElementSibling.innerHTML = "AP", styleDescriptions[0].style.display = 'none');
// //     (apa.checked) ? (apa.nextElementSibling.innerHTML = "American Psychological Assoication", styleDescriptions[1].style.display = 'block') : (apa.nextElementSibling.innerHTML = "APA", styleDescriptions[1].style.display = 'none');
// //     (cms.checked) ? (cms.nextElementSibling.innerHTML = "Chicago Manual of Style", styleDescriptions[2].style.display = 'block') : (cms.nextElementSibling.innerHTML = "CMS", styleDescriptions[2].style.display = 'none');
// //     (mla.checked) ? (mla.nextElementSibling.innerHTML = "Modern Language Association", styleDescriptions[3].style.display = 'block') : (mla.nextElementSibling.innerHTML = "MLA", styleDescriptions[3].style.display = 'none');

// //   });
// // })

// Let's do some colors

const covers = document.querySelectorAll('.title-cover');
let hue = 44;
covers.forEach((e, i) => {
  hue += 2;
  console.log(hue);
  e.style.background = `hsl(${hue}, 100%, 50%)`;

})

// Let's count

// if (document.querySelector('textarea')) {
//   countTitles();
// } else {
//   let counted = document.querySelectorAll('.cap-result');
//   // let charCount = counted.value.length;
//   console.log(counted);
// }


// function addZero(value) {
//   if (value < 10) {
//     return "0" + value;
//   } else {
//     return value;
//   }
// }

// function countTitles() {
//   const textArea = document.querySelector('textarea');
//   const counter = document.querySelector('.counter');

//   textArea.addEventListener('keyup', function () {
//     if (textArea.value === "") {
//       counter.innerText = "";
//       counter.classList.add('counter-out');
//       counter.classList.remove('counter-in');

//     } else {
//       counter.classList.add('counter-in');
//       counter.classList.remove('counter-out');

//       let wordCount = ([textArea.value.match(/\s\b/g)][0] === null) ? 1 : [textArea.value.match(/\s\b/g)][0].length + 1;

//       let characterCount = textArea.value.length;
//       counter.innerText = `Characters: ${addZero(characterCount)} Words: ${addZero(wordCount)}`;
//     }
//   })
// }

const selectedStyle = document.querySelectorAll('.select-left input');
const styleDesc = document.querySelector('.style-description');

styleDesc.innerHTML = selectedStyle[0].dataset.id;
styleDesc.href = `#${selectedStyle[0].value}`;

function updateStyle() {
  styleDesc.innerHTML = this.dataset.id;
  styleDesc.href = `#${this.value}`
}

selectedStyle.forEach(input => input.addEventListener('click', updateStyle));

//Animation H1 header
const header = document.querySelector('.cap-heading');
const headerArray = header.innerText.split('')

for (letter in headerArray) {
  console.log(headerArray, headerArray[letter])
  headerArray[letter] = headerArray[letter].toUpperCase();
}

