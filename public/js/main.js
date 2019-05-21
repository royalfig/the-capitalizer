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
let styleButtons = document.getElementsByName('style');
let styleDescriptions = document.getElementsByClassName('style-rules');

console.log(styleDescriptions[0].classList[1]);

styleButtons.forEach(x => {
  x.addEventListener('change', function () {
    switch (this.value) {
      case 'ap':
        this.nextElementSibling.innerHTML = "Associated Press";
        styleDescriptions[0].style.display = "block";
        styleDescriptions[1].style.display = "none";
        styleDescriptions[2].style.display = "none";
        styleDescriptions[3].style.display = "none";

        document.querySelector("#apa").nextElementSibling.innerHTML = "APA";
        document.querySelector("#cms").nextElementSibling.innerHTML = "CMS";
        document.querySelector("#mla").nextElementSibling.innerHTML = "MLA";
        break;

      case 'apa':
        this.nextElementSibling.innerHTML = "American Psychological Association";
        styleDescriptions[0].style.display = "none";
        styleDescriptions[1].style.display = "block";
        styleDescriptions[2].style.display = "none";
        styleDescriptions[3].style.display = "none";

        document.querySelector("#ap").nextElementSibling.innerHTML = "AP";
        document.querySelector("#cms").nextElementSibling.innerHTML = "CMS";
        document.querySelector("#mla").nextElementSibling.innerHTML = "MLA";
        break;

      case 'cms':
        this.nextElementSibling.innerHTML = "Chicago Manual of Style";
        styleDescriptions[0].style.display = "none";
        styleDescriptions[1].style.display = "none";
        styleDescriptions[2].style.display = "block";
        styleDescriptions[3].style.display = "none";

        document.querySelector("#ap").nextElementSibling.innerHTML = "AP";
        document.querySelector("#apa").nextElementSibling.innerHTML = "APA";
        document.querySelector("#mla").nextElementSibling.innerHTML = "MLA";
        break;

      case 'mla':
        this.nextElementSibling.innerHTML = "Modern Language Association";
        styleDescriptions[0].style.display = "none";
        styleDescriptions[1].style.display = "none";
        styleDescriptions[2].style.display = "none";
        styleDescriptions[3].style.display = "block";

        document.querySelector("#ap").nextElementSibling.innerHTML = "AP";
        document.querySelector("#apa").nextElementSibling.innerHTML = "APA";
        document.querySelector("#cms").nextElementSibling.innerHTML = "CMS";
        break;
    }
  });
})