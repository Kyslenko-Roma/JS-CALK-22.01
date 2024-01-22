const firstNumber = prompt('Enter first number');
const operation = prompt('Enter your operation');
const secondNumber = prompt('Enter second number');

if (operation !=='+' 
&& operation !=='-' 
&& operation !=='*' 
&& operation !=='/' 
&& operation !=='**' 
&& operation !=='plus' 
&& operation !=='minus' 
&& operation !=='multi' 
&& operation !=='division' 
&& operation !=='raising') {
 alert('Incorrect operation');
}else if (firstNumber !== null && firstNumber!== '' && isNaN(+firstNumber)){
 alert('Помилка');
} else if (operation === '+' || operation === 'plus') {
 alert(`The sum is ${firstNumber + secondNumber}`);
} else if (operation === '-' || operation === 'minus') {
 alert(`The sum is ${firstNumber - secondNumber}`);
} else if (operation === '*' || operation === 'multi') {
 alert(`The sum is ${firstNumber * secondNumber}`);
} else if (operation === '/' || operation === 'division') {
 alert(`The sum is ${firstNumber / secondNumber}`);
} else if (operation === '**' || operation === 'raising') {
 alert(`The sum is ${firstNumber ** secondNumber}`);
}



