// --------------------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------------------

const calc = require('../../lib/calculator.class');


// --------------------------------------------------------------------------------
// Calculator Class Specs
// 
// These are very basic tests.
// The Calculator object needs minimal setup.
// The equivalence classes are not meant to be exhaustive.
// Instead, they are meant to showcase nested specs.
// --------------------------------------------------------------------------------

describe("Calculator Class", function() {

  // Spec Setup

  let calculator;

  beforeEach(function() {
    calculator = new calc.Calculator();
  });


  // Test Helper Functions

  function verifyAnswer(actual, expected) {
    expect(actual).toBe(expected);
    expect(calculator.last_answer).toBe(expected);
  }


  // add

  describe("add", function() {

    // let idx = 1;
    it("suite 1 test 1", function() {
      verifyAnswer(calculator.add(3, 2), 5);
      console.log("suite1 test 1");
      // expect(idx).toBe(1);
    });
  
    it("suite 1 test 2", function() {
      verifyAnswer(calculator.add(3, -2), 1);
      console.log("suite1 test 2");
      // idx++;
      // expect(idx).toBe(2);
    });
  
    it("suite 1 test 3", function() {
      verifyAnswer(calculator.add(3, 0), 3);
      console.log("suite1 test 3");
      // idx++;
      // expect(idx).toBe(3);
    });

    it("suite 1 test 4", function() {
      verifyAnswer(calculator.add(3, 0), 3);
      console.log("suite1 test 4");
      // idx++;
      // expect(idx).toBe(4);
    });

    it("suite 1 test 5", function() {
      verifyAnswer(calculator.add(3, 0), 3);
      console.log("suite1 test 5");
      // idx++;
      // expect(idx).toBe(5);
    });

    it("suite 1 test 6", function() {
      verifyAnswer(calculator.add(3, 0), 3);
      console.log("suite1 test 6");
      // idx++;
      // expect(idx).toBe(6);
    });
  
  });


  // subtract

  describe("subtract", function() {

    it("suite 1 should subtract two numbers", function() {
      verifyAnswer(calculator.subtract(3, 2), 1);
      console.log("suite1_1 test 1");
    });
  
    it("suite 1 should subtract two numbers for a negative result", function() {
      verifyAnswer(calculator.subtract(2, 3), -1);
      console.log("suite1_1 test 2");
    });
  
    it("suite 1 should give the same value when subtracting zero", function() {
      verifyAnswer(calculator.subtract(3, 0), 3);
      console.log("suite1_1 test 3");
    });
  
  });
  

//   // multiply

//   describe("multiply", function() {

//     it("should multiply two positive numbers", function() {
//       verifyAnswer(calculator.multiply(3, 2), 6);
//     });
  
//     it("should multiply two negative numbers", function() {
//       verifyAnswer(calculator.multiply(-3, -2), 6);
//     });
  
//     it("should multiply a positive and a negative", function() {
//       verifyAnswer(calculator.multiply(3, -2), -6);
//     });
  
//     it("should give the same value when multiplying by one", function() {
//       verifyAnswer(calculator.multiply(5, 1), 5);
//     });
  
//     it("should give zero when multiplying by zero", function() {
//       verifyAnswer(calculator.multiply(5, 0), 0);
//     });
  
//   });
  
it("should divide two positive numbers", function() {
  verifyAnswer(calculator.divide(10, 2), 5);
  console.log("suite1_2 test 1");
});

    it("should divide two negative numbers", function() {
      verifyAnswer(calculator.divide(-10, -2), 5);
      console.log("suite1_2 test 2");
    });

//   // divide

//   describe("divide", function() {

    // it("should divide two positive numbers", function() {
    //   verifyAnswer(calculator.divide(10, 2), 5);
    // });
  
//     it("should divide two negative numbers", function() {
//       verifyAnswer(calculator.divide(-10, -2), 5);
//     });
  
//     it("should divide a positive and a negative", function() {
//       verifyAnswer(calculator.divide(-10, 2), -5);
//     });
  
//     it("should divide two positive numbers with a decimal result", function() {
//       verifyAnswer(calculator.divide(3, 2), 1.5);
//     });
  
//     it("should give the same value when dividing by one", function() {
//       verifyAnswer(calculator.divide(5, 1), 5);
//     });
  
//     it("should throw an exception when dividing by zero", function() {
//       let divideByZero = function() { calculator.divide(3, 0); };
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
//         verifyAnswer(calculator.maximum(a, b), expected);
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
  //     it(`suite 1 should return ${expected} when given ${a} and ${b}`, () => {
  //       verifyAnswer(calculator.minimum(a, b), expected);
  //     });
  //   });

  // });

});
