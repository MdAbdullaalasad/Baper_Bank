document.getElementById('btn-submit').addEventListener('click',function(){
    const emailCall=document.getElementById('email-name');
    const email=emailCall.value;
    const passwordCall=document.getElementById('psssword');
    const password=passwordCall.value;
 console.log(email,password)
  if(email==='abdulla.com' && Number(password) ===1234){
      window.location.href='bank.html'
  }else{
      alert('Toi Password vule gesos.Toi amar sontan hote paris na!!')
  }

}) 
  

