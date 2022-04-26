function snapCrackle (maxValue) {
  let string = ""
  for (let i=1; i<=maxValue; i++)
    if (i == 1){
      string += "Snap"
    } else if (i % 2 == 0) {
        if (i % 5 == 0){
          string += ", Crackle"
        } else {
          string += `, ${i}`
        }      
    } else if (i % 2 == 1) {
      string += `, Snap`
        if (i % 5 == 0) {
          string += `Crackle`
        }
    }
  return string
}

function isPrime(maxValue) {
  for (let j=2; j<maxValue; j++) {
    if (maxValue % j === 0) {
      return false
    }
  }
  return maxValue != 1
}

function snapCracklePrime (maxValue) {
  let string = ""
  for (let i=1; i<=maxValue; i++) {
    if (i == 1){
      string+= `Snap`
    } else if (i%2 == 0 && i%5 == 0 && isPrime(i) == false){
      string+= `, Crackle`
    } else if (i%2 == 0 && i%5 == 0 && isPrime(i) == true){
      string+= `, CracklePrime`
    } else if (i%2 == 0 && i%5 != 0 && isPrime(i) == false){
      string+= `, ${i}`
    } else if (i%2 == 0 && i%5 != 0 && isPrime(i) == true){
      string+= `, Prime`
    } else if (i%2 == 1 && i%5 != 0 && isPrime(i) == false){
      string+= `, Snap`
    } else if (i%2 == 1 && i%5 != 0 && isPrime(i) == true){
      string+= `, SnapPrime`
    } else if (i%2 == 1 && i%5 == 0 && isPrime(i) == false){
      string+= `, SnapCrackle`
    } else if (i%2 == 1 && i%5 == 0 && isPrime(i) == true){
      string+= `, SnapCracklePrime`
    }         
  }
  return string
}

console.log(snapCrackle(10))
console.log(snapCracklePrime(10))