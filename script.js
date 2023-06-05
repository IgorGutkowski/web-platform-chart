var form = document.getElementById('form');
var bar = document.getElementById('bar');
var chart = document.getElementById('chart');
var description = document.getElementById('description');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let barHeight = parseInt(bar.value);
  if (!isNaN(barHeight) && barHeight >= 0 && description.value.length <= 50) {
    let newBar = document.createElement('div');
    newBar.setAttribute('class', 'bar');
    newBar.style.height = barHeight + 'px';
    let barSpan = document.createElement('span');
    let barDescription = document.createElement('span');
    barDescription.setAttribute('class', 'description');
    barDescription.textContent = description.value;
    barSpan.textContent = barHeight;
    barSpan.appendChild(barDescription);
    newBar.appendChild(barSpan);
    chart.appendChild(newBar);
  } else {
    window.alert(
      'Minimalna wysokość słupka to 0 i przede wszystkim musi być liczbą.\nOpis słupka nie może być dłuższy niż 50 znaków.'
    );
  }
});
