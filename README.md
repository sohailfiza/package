 # sical
`sical` is a Node.js package that provides a collection of mathematical conversions, functions, trigonometric calculations, and geometrical computations for 2D and 3D shapes.

# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
    1. [Conversions](#conversions)
    2. [Mathematical Operations](#mathematical-operations)
    3. [Trigonometry](#trigonometry)
    4. [Factorial, Permutation, Combination, Logarithm](#factorial-permutation-combination-logarithm)
    5. [Shapes](#shapes)
        1. [2D Shapes](#2d-shapes)
        2. [3D Shapes](#3d-shapes)
4. [Contributing](#contributing)
5. [License](#license)

## Installation
To use `sical` in your Node.js project, you can install it,
Using npm:

```bash
  npm i sical
``` 

# Usage
## Conversions
- **rad2deg**: radian to degrees
```js
import sical from "sical";

const angleDegree = sical.rad2deg(1.5)
console.log(angleDegree); // Output: 85.9437
```
- **deg2rad**: degrees to radian
```js
import sical from "sical";

const angleRadian = sical.deg2rad(90)
console.log(angleRadian); // Output: 1.5708
```

- **n2f**: number to fraction
```js
import sical from "sical";

const fraction = sical.n2f(1.5)
console.log(fraction); // Output: 3/2
```

- **n2fArr**: number to fraction
```js
import sical from "sical";

let numbersArray = [0.25, 0.5, 0.75];
console.log(n2fArr(numbersArray)); // Output: ["1/4", "1/2", "3/4"]
```

- **bin2dec**: binary to decimal
```js
  import sical from "sical";

  const binaryNumber = 1100.011;
  const decimalValue = sical.bin2dec(binaryNumber);
  console.log(decimalValue); // Output: 12.375
```

- **dec2bin**: decimal to binary
```js
  import sical from "sical";

  const decimalNumber = 5;
  const binaryValue = sical.dec2bin(decimalNumber);
  console.log(binaryValue); // Output: 101
```

- **bin2oct**: binary to octal
- **oct2bun**: octal to binary
- **bin2hex**: binary to hexadecimal
- **hex2bin**: hexadecimal to binary

## Mathematical Operations
- **gcd**: Greatest Common Divisor (GCD) of two numbers
```js
import sical from "sical";

console.log(gcd(5, 15)); // Output: 5
```

- **gcdArr**: GCD of an array of numbers
```js
import sical from "sical";

let numArr = [12, 18, 24, 36];
console.log(gcdArr(numArr)); // Output: 6
```

- **lcm**
```js
import sical from "sical";

console.log(gcd(20, 15)); // Output: 60
```

- **lcmArr**: LCM of an array of numbers
```js
import sical from "sical";

let numArr = [12, 18, 24, 36];
console.log(lcmArr(numArr)); // Output: 72
```

- **add**: Add two or more numbers.
```js
  const sical = require("sical");

  // Example: Add numbers
  const sum = sical.add(5, 3, 10, 2);
  console.log(sum); // Output: 20
``` 

- **addArr**: sum of all numbers in array
```js
  const sical = require("sical");

  const numArr = [5, 3, 10, 2]
  const sum = sical.add(numArr);
  console.log(sum); // Output: 20
``` 

- **mul**: Multiply numbers.
```js
  import sical from "sical";

  // Example: Add numbers
  const multiply = sical.mul(5, 3, 10, 2);
  console.log(multiply); // Output: 300
``` 
- **mulArr**: multiplication of all numbers in array
```js
  const sical = require("sical");

  const numArr = [5, 3, 10, 2]
  const mul = sical.add(numArr);
  console.log(mul); // Output: 300
``` 


## Trigonometry
- Trigonometric functions such as sinD, cosD, tanD, cosecD, secD, cotD to get trigonometric values from angle in Degree.
```js
  const sical = require("sical");
  const degree = 90
  console.log(sical.sinD(degree)); // Output: 1
``` 

## Factorial, Permutation, Combination, Logarithm
- **factorial**: Calculate the factorial of a number.
```js
import sical from "sical";

// Calculate factorial
let n = 5;
console.log(sical.factorial(n)); // Output: 120
```

- **permutation**: Calculate the permutation (nPr) of two numbers.
```js
import sical from "sical";

// Calculate permutation
let n = 5, r = 3;
console.log(sical.permutation(n, r)); // Output: 60
```

- **combination**: Calculate the combination (nCr) of two numbers.
```js
import sical from "sical";

// Calculate combination
let n = 5, r = 2;
console.log(sical.combination(n, r)); // Output: 10
```

- **log**: Calculate the logarithm with a specified base.
```js
import sical from "sical";

// Calculate logarithm with a specified base
let x = 100, base = 10;
console.log(sical.log(x, base)); // Output: 2
```

## Shapes
### 2D Shapes
- **polygonInteriorAngleSum**: Calculate the sum of interior angles of a polygon.
- **polygonInteriorAngle**: Calculate the interior angle of a regular polygon.
- **polygonExteriorAngle**: Calculate the exterior angle of a regular polygon.
- **regularPolygonPerimeter**: Calculate the perimeter of an n-sided regular polygon.
- **circleArea**: Calculate the area of a circle.
- **circleCircumference**: Calculate the circumference of a circle.
### 3D Shapes
- **Cube**: Volume (coneVolume) and Total Surface Area (cubeTSA).
- **Rectangular Prism**: Volume (rectangularPrismVolume) and Total Surface Area (rectangularPrismTSA).
- **Cylinder**: Volume (cylinderVolume), Curved Surface Area (cylinderCSA), and Total Surface Area (cylinderTSA).
- **Cone**: Volume (coneVolume), Curved Surface Area (coneCSA), and Total Surface Area (coneTSA).
- **Sphere**: Volume (sphereVolume) and Surface Area (sphereTSA).

# Contribution
Feel free to contribute by opening issues or submitting pull requests on the GitHub repository.

https://github.com/sohailfiza/sical.git

# License
ISC

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)