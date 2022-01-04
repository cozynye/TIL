const thisIsPw = document.getElementById('password');
const reThisIsPw = document.getElementById('re-password');
const thisIsButton = document.getElementsByClassName('login-btn')[0];


reThisIsPw.addEventListener('keyup', function(e){
  let password = thisIsPw.value;
  let rePassword = reThisIsPw.value;
  console.log('위',thisIsPw.value)
    console.log('아래',reThisIsPw.value)
    console.log('비교',(password === rePassword))
    console.log('비교',(reThisIsPw.vlaue === thisIsPw.value))
    let pTag = document.getElementsByClassName('alert');
  if(password === rePassword){
      console.log('같음')
      pTag[0].innerHTML=''
     
  }else {
    console.log('같지 않ㅡ')
    pTag[0].innerHTML='비밀번호가 일치하지 않습니다';
    }
  
    console.log('비교',(reThisIsPw.vlaue === thisIsPw.value))
})