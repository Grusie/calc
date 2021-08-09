//let queue = [];

function input_data(){
    const btn = document.querySelectorAll('.btn');
    const result_div = document.getElementById("result");
    
    btn.forEach(function(e){
       e.addEventListener("click", function(){
        calc(e, result_div);
        result_div.innerHTML+=e.value;
        //console.log([].indexOf.call(btn,e));
      })
    })
  }

function calc(e, result){
//  console.log(e.value);
  let temp = result.innerHTML;
  switch(e.value){
    case "+" : 
      getNum2();
      Number(temp)
      console.log(temp);
      break;
    case "-" : break;
    case "×" : break;
    case "÷" : break;
    case "%" : break;
    case "=" : break;
    case "←" : break;
    case "." : break;
    case "x²" : break;
    case "√" : break;
    case "1/x" : break;
    case "CE" : break;
    case "C" : break;
    case "±" : break;
  }
}

function getNum2(){
  do
  {const btn = document.querySelectorAll('.btn');
  const result_div = document.getElementById("result");
  
  btn.forEach(function(e){
    e.click()
    e.click("click", function(){
      result_div.innerHTML+=e.value;
    })
  })} while(false);
}