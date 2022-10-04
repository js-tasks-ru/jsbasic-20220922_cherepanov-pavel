function print(text) {
  console.log(text);
}

function isValid(name) {
<<<<<<< HEAD
  // ваш код...
  if (name !== null && !name.includes(' ') && name.length >= 4) {
    name = true;
  } else  {
    name = false;
  } 
  return name;
} 
=======
  return !!name && !name.includes(' ') && name.length >= 4;
}
>>>>>>> ba50f449b754497aadb05498078dd1564aa30a36

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
