'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :
let result =0
function multiply (number1, number2){
    if (number1<number2 && number1>0 && number2>0){
        let x = 0
        let result =0
        while(x<number2){
        result += number1
        x++      
      }
      return (result)

    }
    if (number2<number1 && number1>0 && number2>0){
        let x = 0
        let result =0
        while (x<number1){
        result += number2
        x++
        }
        return (result)

    }
    if (number2 ==0 || number1 ==0){
        return (0)
    }
    if (number2==number1){
        return (number2 + number1)
    }
    if (number1<0 && number2<0 && number1>number2){
        let x = 0
        let result =0
        number1 = -number1
        number2=-number2
        while(x<number1){
        result += number2
        x++    
      }
      return (result)
    }
    if (number2<0 && number1>0){
        let x=0
        let result =0
        number2 = -number2
        while (x<number2){
         result += number1
         x++   
        }
        return (-result)
    }
    if (number1<0 && number2>0){
        let x=0
        let result =0
        number1 = -number1
        while (x<number1){
         result += number2
         x++   
        }
        return (-result)
    }
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
