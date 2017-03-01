function ranNum(){
  var ranNum = Math.floor(25 * Math.random());
  return ranNum;
  }

  function lovesMe(number){
    for (i=0; i<number; i++){
      if (i%2 == 0){
        document.write("She Loves Me" + '<br>')
      }else document.write("She Loves Me Not!"+'<br>')
    }
  }

  var number = ranNum();
  lovesMe(number)
