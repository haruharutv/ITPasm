window.addEventListener('scroll', pagescroll);

 function pagescroll(e){
  logoposition = document.querySelector('#big_logo').getBoundingClientRect().top;
  if (logoposition <= -400) {
     console.log("ああああああ" );
  }else{
     
  }
 }