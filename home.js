// Checkpoint JS

//1-Find the Smallest and Biggest Numbers
function minMax(arr) {
	var minMax =[Math.min(...arr), Math.max(...arr)]
	return minMax;
}

// 2-Are the Numbers Equal?
function isSameNum(num1, num2) {
	if(num1 === num2){
		return true;
	}else {
		return false;
	}
}

//3-Filter out Strings from an Array
function filterArrayy(arr){
    return arr.filter ((element) => typeof element ==="number");
}

//4-How Much is True?
function countTrue(arr){
    let count = 0;
    for(let i=0 ; i<arr.length ;i++){
        if(arr[i] == true){
            count++;
        }
    }
    return count;
}

//5-Convert Key, Values in an Object to Array
function objectToArray(obj) {
    let arr=[]
    for(let key in obj){
        let val = obj[key];
        arr.push([key, val]);
    }
       return arr;
   }

   //6-Get Sum of People's Budget
   const getBudgets = arr => arr.reduce((a,v) => a + v.budget, 0);

   //7-Ageing the Population...
   const afterNYears = (names, n) =>{
	for(const age in names){
		names[age] += Math.abs(n);
	}
	return names;
}

  //8-International Greetings
  const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	 if (GUEST_LIST[name]) {
        return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`
    } else {
        return "Hi! I'm a guest."
    }
}

  //9-Absolute Sum
  function getAbsSum(arr){
    var result = 0;
    
    for(i = 0; i < arr.length; i++) {
      result += Math.abs(arr[i]);
    }
    
    return result;
}

  //10-Printer Levels
  function inkLevels(inks) {
	return Math.min(...Object.values(inks))
}