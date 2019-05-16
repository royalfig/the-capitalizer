//Copy to clipboard

//Add event handler for click
document.getElementById("copy-button").addEventListener("click", textCopy);



//Function to copy text
function textCopy() {
    let copyText = document.getElementById("title-text");
    console.log(copyText);
    copyText.select();
    document.execCommand("copy");
    
  }