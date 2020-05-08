var x = 0.1 + 0.1 + 0.1;
console.log(x);

function almostEqual(a, b) {
  return a - b < 10 ** -7;
}

function getType(entity){
    var x = Object.prototype.toString.call(entity)
    return x.split(" ")[1].split(']')[0].toLowerCase()
}

function checkType(entity, type){
    return getType(entity) === type
}

console.log(almostEqual(x, 0.3));
