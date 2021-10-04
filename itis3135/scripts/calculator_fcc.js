const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');

keys.addEventListener("click", e => {
 if (e.target.matches("button")) {
	const key = e.target;
	const action = key.dataset.action;

	if (!action) {
	  console.log('number key!');
	}

	if (
	  action === 'add' ||
	  action === 'subtract' ||
	  action === 'multiply' ||
	  action === 'divide'
	) {
		key.classList.add('is-depressed');
		calculator.dataset.previousKeyType = 'operator';
		
		if (
			firstValue &&
			operator &&
			previousKeyType !== 'operator' &&
			previousKeyType !== 'calculate'
		  ) {
			const calcValue = calculate(firstValue, operator, secondValue)
			display.textContent = calcValue
			calculator.dataset.firstValue = calcValue
		  } else {
			calculator.dataset.firstValue = displayedNum
		  }
		
		calculator.dataset.firstValue = displayedNum;
		calculator.dataset.operator = action;
	}

	if (action === 'decimal') {
	  display.textContent = displayedNum + '.';
	}

	if (action === 'clear') {
	  console.log('clear key!');
	}

	if (action === 'calculate') {
	  console.log('equal key!');
	}
	
	// Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'));
 }
})

const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    if (!action) {
	  if (displayedNum === '0' || previousKeyType === 'operator') {
		display.textContent = keyContent;
	  } else {
		display.textContent = displayedNum + keyContent;
	  }
	}
  }
})

if (action === 'calculate') {
  const firstValue = calculator.dataset.firstValue;
  const operator = calculator.dataset.operator;
  const secondValue = displayedNum;
  
  if (firstValue) {
    if (previousKeyType === 'calculate') {
      firstValue = displayedNum
    }
	
  display.textContent = calculate(firstValue, operator, secondValue);
  }
  
  calculator.dataset.modValue = secondValue;
  calculator.dataset.previousKeyType = 'calculate';
}

const calculate = (n1, operator, n2) => {
  let result = '';
  
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2);
  }
  
  return result;
}

// Do nothing if string has a dot
if (!displayedNum.includes('.')) {
  display.textContent = displayedNum + '.'
}

if (!action) {
  if (
    displayedNum === '0' ||
    previousKeyType === 'operator' ||
    previousKeyType === 'calculate'
  ) {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
  calculator.dataset.previousKeyType = 'number'
}

if (action === 'decimal') {
  if (!displayedNum.includes('.')) {
    display.textContent = displayedNum + '.'
  } else if (previousKeyType === 'operator') {
    display.textContent = '0.'
  }
  
calculator.dataset.previousKeyType = 'decimal'
}

if (action === 'clear') {
  // ...
  calculator.dataset.previousKeyType = 'clear'
}

if (action === 'calculate') {
 // ...
  calculator.dataset.previousKeyType = 'calculate'
}