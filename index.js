/* function fakeBin(x) {
    let result = '';
    let l = x.length;
    console.log (l);
    for (i = 0; i<=l; i++ ) {
      if ((x[i]) < '5') {
        result = result + '0'; 
        } else if (x[i] >= '5') {result = result + '1'};
    }
    return result;
  } */


/*   function areaLargestSquare(r) {
    let a = (2 * r) / Math.sqrt(2);
    let result = a** 2;
    return Math.round(result); //code here
  } */

/* function digits(n) {
    let text = n.toString();
    console.log (text);
    let result = text.length;
    return result;
    // TODO
    }  */

  /*   function removeChar(str){
      let result ='';
      let l = str.length;
      for (i=1; i <= (l-2); i++) {
        result = result + str[i];
      };
    return result;
    };
 */
    /* function noSpace(x){
      let result = '';
      for (i = 0; i <= (x.length-1); i++){
        if (x[i] === ' ') {
          result = result;
        } else {
            result = result + x[i];
          };
      };
      return result;
    };
 */


/* function solution(str, ending){
  return str.endsWith(ending);
} 
 */

/* function repeatStr (n, s) {
  return s.repeat(n);
} */
/* 
  function finalGrade (exam, projects) {
    if (exam>90 || projects>10) {return 100};
    if (exam>75 || projects>=5) {return 90};
    if (exam>50 && projects>=2) {return 75};
    return 0;
  } 
 */
/* 
  function switchItUp(number){
    switch (number) {
      case 0: return 'Zero';
      case 1: return 'One';
      case 2: return 'Two';
      case 3: return 'Three';
      case 4: return 'Four';
      case 5: return 'Five';
      case 6: return 'Six';
      case 7: return 'Seven';
      case 8: return 'Eight';
      case 9: return 'Nine';
    };
  } */



/* function rentalCarCost(d){
  if (d < 3) { 
    return  d * 40;
    } else if (d < 7) {
      return d * 40 - 20;
      } else {
        return d * 40 - 50;
      };
};
 */
/* 
function typeOfSum(a, b) {
  console.log ('a'*'b');
  return typeof (a * b);

} */


const long = (number) => {
  let l = number.toString().length;
  let digit = Array();
  let remain = 0;
  digit[l] = 0;
  for (i=l; i >= 0; i--){
    remain = (number - digit[i] * Math.pow (10, l-1)) % Math.pow (10, l-1);
    digit[i] = (number - remain) / Math.pow (10, l-1);
    console.log (remain);
    console.log (digit[i]);
    console.log (i);
  }
  return l;
}



let z = long (132);

console.log (z);