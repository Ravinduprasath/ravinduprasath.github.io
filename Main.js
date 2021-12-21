var imageSources = ['images/backgroud-one.png','images/background-three.jpg','images/background-four.jpg']

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("imgMain").src = imageSources[index];
  index++;
} , 4000);