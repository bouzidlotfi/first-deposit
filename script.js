

function arrayDiff(a,b){
    var equal=false
    var c=[]
      for (let i=0;i<a.lenght;i++){
          equal=false;
        for(let j=0;j<b.lenght;j++)
        if(a[i]==b[j])
          equal=true;
        if(equal==false) c.push(a[i]);
      }
}
function even_or_odd(number) {
    var a
    a=number;
    if(a%2==0){
      return "Even"
   }    
    else{
     return "Odd"
  }
  }    
  function sayHello(){
    var prenom= prompt('Entrez votre Nom:');
    var phrase= 'Hello' +  prenom;
     alert (phrase);
     return "alert"
    }
    sayHello();

    function adult(Age){
      var a=prompt("Entrez votre age:"); 
      if (a<18) {
         alert('Vous etes mineur');
      }
      else {
         alert('Vous etes adulte'); 
      }
   }
   adult();

   function showArray(days){
     var tableau=['Samedi','Dimanche','Lundi','Mardi','Mercredi','Jeuudi','Vendredi'];
     console.log(tableau);
    }
   showArray();

   function getMiddle(str)
   {
     let length= str.length;
     let middle= Math.floor(length/2);
     
     if(length % 2 == 0){
       return str[middle-1] + str[middle]
     }
     else{
       return str[middle]
     }  
   }

   function isTriangle(a,b,c)
{
  var a,b,c
  
  if(a+b>c && a+c>b && b+c>a){
    return true;
  }
  else{
    return false;
  } 
}
isTriangle();

function divisors(integer) {
  const array =[];
  for(let i=2;i<integer;i++){
   integer%i===0 && array.push(i)
  }
  if(array.length===0){
    return integer + " is prime"
  }
  else{
    return array
  }
}

function makeNegative(num) {
  if(num<0){
    return num
  }
  else{
    return -num
  }
}

function removeChar(str){
  return str.slice(1,-1) 
 }

 function noSpace(x){
  return x.replace(/ /g , '');
}

function litres(time) {
  let hydrated = time * 0.5
   
   return Math.floor(hydrated);
 }

 function century(year) {
  const century = Math.floor(year /100);
  const decade = year % 100;
  if( decade>0){
  return century+1;
} 
  else {
  return century;   
  }
  }

  function DNAtoRNA(dna) {
    return dna.replace(/T/g , 'U');
   }

   function maps(x){
    const array1 = x
    const array2 = array1.map((x)=>{
        return x * 2
   });  
    return array2
  }
  

   function abbrevName(name){
    const array= name.split (' ');
    const [firstname,surname] = array; 
   const result = (firstname[0].toUpperCase())+"."+(surname[0].toUpperCase());
   return result       
   }

   const summation = n => {
    let sum = 0;
   for(let i=0;i<=n;i++){
    sum += i; 
    }
  return sum;
    };

   function solution(str){
    return str.split('').reverse().join('');
  }

  function digitize(n) { 
    return n.toString().split('').reverse().map(Number)
  }

  const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''),2);
  }

  function areYouPlayingBanjo(name) {
    if(name[0]== "R" || name[0]=="r"){
        return name  +  " plays banjo";
    }
   else{
     return name  +  " does not play banjo"
   }
  }

  function greet(name){
    if(name === "Johnny"){
       return "Hello, my love!"
    }
    else{
      return "Hello, " + name + "!";
    }      
  }

  function greet(){
    return "hello world!"
  }

  function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': result = value.a + value.b;
        break;
      case'-': result = value.a - value.b;
        break;
      case'/': result = value.a / value.b;
        break;
      case'*': result = value.a * value.b;
        break;
      case'%': result = value.a % value.b;
        break;
      case'^': result = Math.pow(value.a, value.b);
    }
    return result;
  }

  function leo(oscar){
 
    if (oscar==86){
          return "Not even for Wolf of wallstreet?!"
      }
      if (oscar==88){
        return "Leo finally won the oscar! Leo is happy";
      }
      if (oscar==87 && a<86){
        return "When will you give Leo an Oscar?"
      }
      if (oscar>88){
        return "Leo got one already!"
      }
    }

    var countSheep = function (num){
      let result='';
      for(let i=1;i<=num;i++){
        result +=i + " sheep...";
    }
      return result
      }

      function doubleChar(str) {
        let result ="";
        for(let i=0;i<str.length;i++){
          result += str[i]+str[i];
        }
        return result;
        }

        function smash (words) {
          return words.join(' ')   
      };

      function solution(number){
        let sum=0;
        for(let i=0;i<number;i++){
          const multiple3 = i % 3 == 0;
          const multiple5 = i % 5 == 0;
           sum = multiple3 || multiple5 ? (i+sum):sum;
        }
        return sum;
      }

      function spinWords(words){
        const splitWords = words.split(' ');
        let result =[];
        for(let word of splitWords){
          if(word.length >= 5){
            word = word.split('').reverse().join('')
          }
          result.push(word);
        }
        return result.join(' ');
      }

      function findOutlier(integers){
        let even=[]
        let odd=[]
         for(let i=0;i<integers.length;i++){
           if(integers[i] % 2 ===0){
             even.push(integers[i])
         }
          else if(integers[i] % 1 ===0){
            odd.push(integers[i])
          } 
          else if(integers[i] % -2===0){
            even.push(integers[i])
          }
           else{
            odd.push(integers[i])
          }
          }
         if(even.length<odd.length){
           return Number(even)
         }
         else{
           return Number(odd)
         }
       } 

       const likes= names => {
        if(names.length===0) return 'no one likes this' 
        else if(names.length===1) return `${names[0]} likes this`
        else if(names.length===2) return `${names[0]} and ${names[1]} like this`
        else if(names.length===3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
        else if(names.length>=4) return  `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
      }

      function peopleWithAgeDrink(old) {
  
        if (old<14){
          return "drink toddy"
        }
        else if (14<=old && old<18){
          return "drink coke"
        }
        else if (18<=old && old<21){
          return "drink beer"
        }
        else if (old>=21){
          return "drink whisky"
        }
      }

      