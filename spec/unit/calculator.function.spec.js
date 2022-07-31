// --------------------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------------------

const calc = require('../../lib/calculator.functions');


// --------------------------------------------------------------------------------
// Calculator Function Specs
// 
// These are very basic tests.
// Since the calculator functions are stateless, they don't need setup or cleanup.
// The equivalence classes are not meant to be exhaustive.
// Instead, they are meant to showcase nested specs.
// --------------------------------------------------------------------------------

describe("Calculator Functions", function() {

  // add

  describe("add", function() {

    it("suite 2 test 1", function() {
      let value = calc.add(3, 2);
      expect(value).toBe(5);
      console.log("suite 2 test 1")
    });
  
    it("suite 2 test 2", function() {
      let value = calc.add(3, -2);
      expect(value).toBe(1);
      console.log("suite 2 test 2")
    });
  
    it("suite 2 test 3", function() {
      let value = calc.add(3, 0);
      expect(value).toBe(3);
      console.log("suite 2 test 3")
    });

    it("suite 2 test 4", function() {
      let value = calc.add(3, 0);
      expect(value).toBe(3);
      console.log("suite 2 test 4")
    });

    it("suite 2 test 5", function() {
      let value = calc.add(3, 0);
      expect(value).toBe(3);
      console.log("suite 2 test 5")
    });

    it("suite 2 test 6", function() {
      let value = calc.add(3, 0);
      expect(value).toBe(3);
      console.log("suite 2 test 6")
    });
  
  });


  // subtract

  describe("subtract", function() {

    it("suite 2 should subtract two numbers", function() {
      let value = calc.subtract(3, 2);
      expect(value).toBe(1);
      console.log("suite 2_2 test 1")
    });
  
    it("suite 2 should subtract two numbers for a negative result", function() {
      let value = calc.subtract(2, 3);
      expect(value).toBe(-1);
      console.log("suite 2_2 test 2")
    });
  
    it("suite 2 should give the same value when subtracting zero", function() {
      let value = calc.subtract(3, 0);
      expect(value).toBe(3);
      console.log("suite 2_2 test 3")
    });
  
  });
  

  it("should multiply two positive numbers", function() {
          let value = calc.multiply(3, 2);
          expect(value).toBe(6);
          console.log("suite 2_3 test 1");
        });
      
        it("should multiply two negative numbers", function() {
          let value = calc.multiply(-3, -2);
          expect(value).toBe(6);
          console.log("suite 2_3 test 2");
        });
      
        it("should multiply a positive and a negative", function() {
          let value = calc.multiply(3, -2);
          expect(value).toBe(-6);
          console.log("suite 2_3 test 3");
        });
      
        it("should give the same value when multiplying by one", function() {
          let value = calc.multiply(5, 1);
          expect(value).toBe(5);
          console.log("suite 2_3 test 4");
        });

//   // multiply

//   describe("multiply", function() {

//     it("should multiply two positive numbers", function() {
//       let value = calc.multiply(3, 2);
//       expect(value).toBe(6);
//     });
  
//     it("should multiply two negative numbers", function() {
//       let value = calc.multiply(-3, -2);
//       expect(value).toBe(6);
//     });
  
//     it("should multiply a positive and a negative", function() {
//       let value = calc.multiply(3, -2);
//       expect(value).toBe(-6);
//     });
  
//     it("should give the same value when multiplying by one", function() {
//       let value = calc.multiply(5, 1);
//       expect(value).toBe(5);
//     });
  
//     it("should give zero when multiplying by zero", function() {
//       let value = calc.multiply(5, 0);
//       expect(value).toBe(0);
//     });
  
//   });
  

//   // divide

//   describe("divide", function() {

//     it("should divide two positive numbers", function() {
//       let value = calc.divide(10, 2);
//       expect(value).toBe(5);
//     });
  
//     it("should divide two negative numbers", function() {
//       let value = calc.divide(-10, -2);
//       expect(value).toBe(5);
//     });
  
//     it("should divide a positive and a negative", function() {
//       let value = calc.divide(-10, 2);
//       expect(value).toBe(-5);
//     });
  
//     it("should divide two positive numbers with a decimal result", function() {
//       let value = calc.divide(3, 2);
//       expect(value).toBe(1.5);
//     });
  
//     it("should give the same value when dividing by one", function() {
//       let value = calc.divide(5, 1);
//       expect(value).toBe(5);
//     });
  
//     it("should throw an exception when dividing by zero", function() {
//       let divideByZero = function() { calc.divide(3, 0); };
//       expect(divideByZero).toThrowError(RangeError, 'Divide-by-zero');
//     });
  
//   });


//   // maximum

//   describe("maximum", function() {

//     [
//       [1, 2, 2],
//       [2, 1, 2],
//       [2, 2, 2],
//     ].forEach(([a, b, expected]) => {
//       it(`should return ${expected} when given ${a} and ${b}`, () => {
//         let value = calc.maximum(a, b);
//         expect(value).toBe(expected);
//       });
//     });

//   });

  
  // minimum

  // describe("minimum", function() {

  //   [
  //     [1, 2, 1],
  //     [2, 1, 1],
  //     [1, 1, 1],
  //   ].forEach(([a, b, expected]) => {
  //     it(`suite 2 should return ${expected} when given ${a} and ${b}`, () => {
  //       let value = calc.minimum(a, b);
  //       expect(value).toBe(expected);
  //     });
  //   });

  // });

});
