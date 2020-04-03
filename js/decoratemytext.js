function displayHello(){
//   alert("Hello, world!");  
var txtArea = document.getElementById("txtarea");
// txtArea.style.fontSize = "4em";
console.log(document.getElementById("txtarea").style.fontSize);
// txtArea.style.fontSize =
// parseInt(txtArea.style.fontSize)+ 2 + "px";
}
function popMsg(){
    // alert("Checked!");
    var txtArea = document.getElementById("txtarea");
    if (document.getElementById('bling').checked) 
  {
    txtArea.style.fontWeight= "bold";
    txtArea.style.color="green";
    txtArea.style.textDecoration="underline";
} else {
    txtArea.style.fontWeight= "normal";
}
}
