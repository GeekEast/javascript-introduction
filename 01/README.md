### Types

```javascript
clear()

// 1. string
x1 = "string"

// 2. number
x2 = 2
x3 = 2.3

// 3. boolean
x4 = true
x5 = false

// 4. array
x6 = [[],2,3]

// 5. object
x7 = {
  x: 1,
  y: 2
}

// 6. map {} -> Map
x8 = new Map()

// 7. set [] -> Set
x9 = new Set()

// 8. empty value
x10 = undefined // empty for any type
x11 = null // empty for object type
x12 = NaN // empty for number type

// check type roughly
console.log(typeof x1)
console.log(typeof x2)
console.log(typeof x3)
console.log(Number.isInteger(x2))
console.log(Number.isInteger(x3))
console.log(typeof x4)
console.log(typeof x6)
console.log(typeof x7)
console.log(typeof x8)

// check type precisely
console.log(Object.prototype.toString.call(x1))
console.log(Object.prototype.toString.call(x2))
console.log(Object.prototype.toString.call(x3))
console.log(Object.prototype.toString.call(x4))
console.log(Object.prototype.toString.call(x5))
console.log(Object.prototype.toString.call(x6))
console.log(Object.prototype.toString.call(x7))
console.log(Object.prototype.toString.call(x8))
console.log(Object.prototype.toString.call(x9))
```

### De-structure Number
```javascript
// integral part
console.log(parseInt(3/2))

// decimal part
console.log(3/2%1)

// round 
console.log(Math.round(3/2))
```

### Operation
```javascript
clear()
// 指数运算
4**(1/3)

// 自增自减
x = 1
y1 = x++ //先赋值后自增
y2 = ++x //先自增后赋值
console.log(x)
console.log(y)

// logical operation
!(true || false)
true && false
!true
```

- Coerion
```javascript
// number to string
String(1)
""+1
[1].join('')
`${1}`
age = 3
console.log(`my age is ${age}`)

// string to number
Number("1")
+"1"
-"1"

// number to boolean
// 0 and empty and '' is false, other is true
Boolean(1)
Boolean(0)
!0
!!0
!!""
Boolean(undefined)
Boolean(null)
Boolean(NaN)
Boolean({})
Boolean([])
```
### Compare
- passing by value
  - 引用类型的时候: 比较的是引用的指向
  - 原始类型的时候: 比较的是值
```javascript
x = {}
y = {}

// 最不安全的做法
x == y

// 较安全的做法
x === y

// 最安全的做法
Object.is(x,y)
```