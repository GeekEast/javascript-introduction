## Table of Content
### User Input
```javascript
// notification
alert("Something Wrong")

// user input
var x = prompt("Please input your name:")
```

### Floating Number and almostEqual
- [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
```javascript
function almostEqual(x,y) {
  return (x-y) < (10**(-7))
}

almostEqual(.1 + .1 + .1, .3)
```
### `getType` and `checkType`
```javascript
function getType(entity){
    var x = Object.prototype.toString.call(entity)
    return x.split(" ")[1].split(']')[0].toLowerCase()
}

function checkType(entity, type){
    return getType(entity) === type.toLowerCase()
}
```
### Function and arrow function
```javascript
function play(x){
    // return undefined
}
play() // undefined

function play(x){
    return 1
}
play(1)

// varaible length of parameters
function play(...arg){
	return arg
}

play(1,2,3,4,5,6,7)


play  = (...arg) => {return arg}
play(1,2,3)

play  = (...arg) => arg
play(1,2,3)
```
### `var`, `const`, `let`
```javascript
var x = 1
const y = 1 // cannot change y
let z = 1 // same as var, but better
```
### Loops
- for loop
```javascript
const y = [10,9,23,3,4]

// index
for (let i = 0; i < y.length; i++) {
 	console.log(y[i])
}

// index
for (key in y) {
    console.log(key)
}

// value
for (val of y) {
    console.log(val)
}
```
- while loop
```javascript
x = 0
while (x < 10) {
    console.log(x)
    x += 1
}
```
- `2D` Array
```javascript
x = [
        [1,2,3,4],
        [4,5,6,7],
        [7,8,9,8]
]

for (let i=0;i< x.length; i++){
    for (let j=0; j< x[i].length; j++){
        console.log(x[i][j])
    }
}

for (item of x) {
    for (jtem of item) {
        console.log(jtem)
    }
}

// genenrate  2d array 10*10
y = []
for (let i=0; i< 10;i++) {
    temp = []
    for (let j=0; j<10; j++){
        temp[j] = j
    }
    y[i] = temp
}

console.log(y)
```




### Map, filter, reduce
```javascript
[1,2,3].map(x => x*2)
[1,2,3].reduce((sum, n) => sum + n)
[1,2,3].filter(x => x > 1)
```

### Destructure
```javascript
x = [1,2,3]
y = [...x,4]

x = {
    a :1,
    b: 2
}

y = {
    ...x,
    c : 3
}
```
### Debugger
- chrome/firefox -> `debugger`
- step in: 进入子函数
- step over: 跨过子函数
- step out: 从子函数出来

### Error Handling
```javascript
function play() {
    throw Error("error happend")
}

try {
   play() 
    console.log('no error')
} catch {
   console.log('error')
}

console.log('end of line')
```
### Async
```javascript
async function asyncCall() {
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const x = async () => {
    await delay(2000)
    console.log('x return')
}

const y = async () => {
    console.log('y')
}

x()
y()
```
### OOP
```javascript
class Animal {
    constructor(name) {
        this.name = name
	}
    
    run() {
        console.log('running')
    }
}


class Cat extends Animal {
    constructor(name, age) {
        super(name)
        this._age = age
    }
    
    run() {
        console.log('cat running')
    }
    
    meow () {
        console.log("miao")
    }
    
    get age() {
        return this._age
    }
    
    set age(age) {
        this._age = age
    }
    
    static log() {
        console.log('gan jb sha')
    }

	static get species() {
        return "cat"
	}
}


const cat = new Cat("nn",12)
// console.log(Cat.species)
// console.log(cat.age)
cat.age = 2
```
- Code Tracing and Reasoning Over Code
- testing with Jest
### Reference
