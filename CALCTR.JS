//use insert function to insert number in CALCULATOR

function insert(num){
  document.form1.textview.value = document.form1.textview.value + num;
}

//use equal function to return the value based on given expression

function equal(num){
  var exp = document.form1.textview.value
  if (exp){
    document.form1.textview.value = eval(exp);
  }
}

function clear(){
  document.form1.textview.value = ' ';
}

function backspace(){
  var exp = document.form1.textview.value;
  document.form1.textview.value = exp.substring(0, exp.length -1);
}
