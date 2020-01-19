function myFunction() {
    var textarea = document.getElementById("text")
    if (textarea.style.fontWeight=="bold")
    textarea.style.fontWeight = '';
    else
    textarea.style.fontWeight = 'bold';
  }

  function myitalicFunction() {
    var textarea = document.getElementById("text")
  if ( textarea.style.fontStyle == 'italic')
  textarea.style.fontStyle = 'normal'; 
  else 
  textarea.style.fontStyle = 'italic';
  }

  function myunderlineFunction() {
    var textarea = document.getElementById("text")
   if (textarea.style.textDecoration=='underline')
   textarea.style.textDecoration='none'; 
   else
   textarea.style.textDecoration='underline';
}

var fontSizeDD = document.getElementById('fontSizeDD');
fontSizeDD.onchange = function () {
    var txtBox = document.getElementById("text")
    txtBox.style.fontSize = this.value;
};


function changeFont(font){
  document.getElementById("text").style.fontFamily = font.value;
}

