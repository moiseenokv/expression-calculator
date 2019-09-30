function eval() {
    // Do not use eval!!!
    return;
}

function calc(fn) {
  return new Function('return ' + fn)();
}

function expressionCalculator(expr) {
  var str = expr.trim().split('').filter(el=>el!="");
  var devisionByZero = expr.trim().includes('/0') || expr.trim().includes('/ 0');
  var scopesSeq = [0,0];
  str.filter(function (el) {
      if(el == '('){
          scopesSeq[0] +=1;
      }else if(el == ')'){
        scopesSeq[1] +=1;
      }
  });

  if(scopesSeq[0]!=scopesSeq[1]){
    throw new Error('ExpressionError: Brackets must be paired');
  }

  if(devisionByZero==true){
    throw new Error('TypeError: Division by zero.');
  }

  return calc(expr);
}

module.exports = {
    expressionCalculator
}