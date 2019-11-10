// T is a generic
function arrayFill<T>(length:number, value:T):T[] {
  const arrayToBeFilled:T[] = [];
  for(let i:number=0; i<length; i++) {
    arrayToBeFilled[i] = value;
  }
  return arrayToBeFilled;
}

const result = arrayFill(5, "some string");

console.log(result);

result.forEach(item => {
  console.log(item.toUpperCase())
})