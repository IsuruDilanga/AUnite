// setProgress('progress-bar-1', 50);
var english = document.getElementById("english").value;
var etiquette = document.getElementById("etiquette").value;

sessionStorage.setItem('english', english)
sessionStorage.setItem('etiquette' , etiquette)

setProgress('progress-bar-2', (2* parseInt(english)));
setProgress('progress-bar-3', (2* parseInt(etiquette)));

function setProgress(progressBarId, percentage) {
  const progressBar = document.getElementById(progressBarId);
  const progressBarWidth = progressBar.offsetWidth;
  const progressBarFillWidth = progressBarWidth * (percentage / 100);

  progressBar.querySelector('.bar').style.width = progressBarFillWidth + 'px';

  const percentElement = progressBar.querySelector('.percent');
  percentElement.innerText = percentage + '%';
}


// var fullname = '{{ fullname }}';
// console.log(fullname);

