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
function input_data()
{
    var btn = document.querySelectorAll('.btn');
    var result_div = document.getElementById("result");

    [].forEach.call(btn, function(e){ 
    e.addEventListener("click", function(){
        var index=getElementIndex(btn, e);
        result_div.innerHTML += btn[index].value
    }, false); 
    });
}
function getElementIndex(e, range) {
  if (range) return [].indexOf.call(e, range);
  return [].indexOf.call(e.parentNode.children,e.parentNode);
}