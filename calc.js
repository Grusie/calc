// function input_data()
// {
//     let input_btn=document.getElementsByClassName("btn btn-outline-primary");
//     let result_div=document.getElementById("result");
//     for(let i=0; i<input_btn.length; i++)
//     {
//         console.log(input_btn[i]);
//         result_div.innerHTML+=String(input_btn[i].value);
//     }
// }

function input_data(){
    const btn = document.querySelectorAll('.btn');
    const result_div = document.getElementById("result");

    btn.forEach(function(e){
       e.addEventListener("click", function(){
        let index = getElementIndex(btn, e);
        calc(e);
        result_div.innerHTML += btn[index].value
      })
    })
  }

function getElementIndex(e, range) {
  if (!!range) {
    return [].indexOf.call(e, range);
  }
}

function check_op(e){
  if(isNaN(Number(e.value))) return [e.value, "oper"];
  else return [e.value];
}
function calc(e){
  
  let Arr_val = check_op(e);
  console.log(Arr_val[0]);
  if(Arr_val[1]){
    switch(Arr_val[0]){
      case "+" : break;
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
}