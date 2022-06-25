var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
	currentNumber = ++currentNumber;
	currentNumberWrapper.innerHTML = currentNumber;
	refreshColor();
	stopCountIncrement();
}

function decrement() {
	currentNumber = --currentNumber;
	currentNumberWrapper.innerHTML = currentNumber;
	refreshColor();
	stopCountIncrement();
}

function refreshColor() {
	if (currentNumber < 0) {
		currentNumberWrapper.style.color = 'red';
	} else {
		currentNumberWrapper.style.color = 'blue';
	}  
  }

  function stopCountIncrement() {
	if (currentNumber < -9) {
		currentNumber = 0};
	if (currentNumber > 9) {
		currentNumber = 0};
  }
