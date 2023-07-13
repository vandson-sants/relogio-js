const secondsPonteiro = document.querySelector(".ponteiro.seconds");
const minutesPonteiro = document.querySelector(".ponteiro.minutes");
const hoursPonteiro = document.querySelector(".ponteiro.hours");

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
  const currentDate = new Date();
  const secondsPercentage = currentDate.getSeconds() / 60; //pegando a porcentagem para rotacionar os ponteiros
  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

  setRotation(secondsPonteiro, secondsPercentage);
  setRotation(minutesPonteiro, minutesPercentage);
  setRotation(hoursPonteiro, hoursPercentage);
};

setClock();

setInterval(setClock, 1000);
