let a = prompt ('type number');
let b = prompt ('type second number');
a = Number (a);
b = Number (b);

console.log(a+b);

console.log( 'jami aris: ' + ' ' + a+b  + ' < aq rato bechdavs 13?');

// მეორე დავალება ------------------------------------------------------------

let arr =  [ 5,10,3,15,60,25,78];
let kenti = arr.filter(
    number => {
        return number % 2 !== 0;
    }
)

let luwi = arr.filter(
    number=>{
        return number % 2 == 0;
    }
)
    

console.log(kenti);
console.log(luwi);

// მესამე

let c = 'ჩვენ ვართ FrontEnd დეველოპერები და ვაწყობთ საიტებს';
console.log(c.replace('FrontEnd ', 'frontend '));
console.log(c.slice(0,10));
console.log(c.slice(c.length-2));

// მეოთხე

let array = [10, 60, 80, [20, 30, 15]]; 
    let innerArr = array[3]; 
    let sum = 0;

  function saxeli(number) {
    return sum += number;
    }
    
    innerArr.forEach(saxeli);
  console.log('shida masivis jami aris : ' + sum);