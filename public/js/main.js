//Copy to clipboard

//Add event handler for click
if (document.getElementById('copy-button')) {
  document.getElementById("copy-button").addEventListener("click", textCopy);
}



//Function to copy text
function textCopy() {
  let copyText = document.getElementById('title-text');
  console.log(copyText);
  copyText.select();
  document.execCommand('copy');

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