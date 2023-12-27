const x = '1'
const y = '2'

console.log(x, y)

// format var to str: %s str, %d int, %i int, %o object
console.log('I am %s and my age is %d', 'Divyan', 20)

// clear console
console.clear()

// keeps count
console.count('I am Divya')
console.count('I am Divya')
console.count('I am Divya')
console.count('I am Divya')

// reset count
console.countReset('I am Divya')

const fun1 = () => {
  console.trace()
}

const fun2 = () => {
  fun1()
}

fun2()

// time for function

const sum = () => {
  console.log(`the sum of 2 and 3 is: ${2 + 3}`)
}
const multiply = () => {
  console.log(`The multiplication of 2 and 3 is:${2 * 3}`)
}

const measureTime = () => {
  console.log('sum()')
  sum()
  console.timeEnd('sum()')
}
