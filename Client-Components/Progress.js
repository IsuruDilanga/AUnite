setProgress('progress-bar-1', 50);
setProgress('progress-bar-2', 75);
setProgress('progress-bar-3', 25);

function setProgress(progressBarId, percentage) {
  const progressBar = document.getElementById(progressBarId);
  const progressBarWidth = progressBar.offsetWidth;
  const progressBarFillWidth = progressBarWidth * (percentage / 100);

  progressBar.querySelector('.bar').style.width = progressBarFillWidth + 'px';

  const percentElement = progressBar.querySelector('.percent');
  percentElement.innerText = percentage + '%';
}

