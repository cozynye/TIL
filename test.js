var one = 1;

console.log(prev) // undefined 자바스크립트 호이스팅 특성

function change(){
  console.log(one);

  let two = 2;
  const three = 3;

  

  console.log(two);
  console.log(three);

  one = 11;
  two = 22;
  // three=33;  Uncaught TypeError: Assignment to constant variable.
}
var prev=3
change();

console.log(one); // 11

var one = '일입니다'

console.log(one); // 일입니다

// console.log(two); //two is not defined at

const three = 33;
console.log(three); //33 