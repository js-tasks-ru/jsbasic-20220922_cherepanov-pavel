function print(text) {
  console.log(text);
}

function isValid(name) {

  // ваш код...
  if (name !== null && !name.includes(' ') && name.length >= 4) {
    name = true;
  } else  {
    name = false;
  } 
  return name;
} 

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
