 # sical
`sical` is a Node.js package that provides a collection of mathematical functions, trigonometric calculations, logarithmic operations, and geometrical computations for 2D and 3D shapes.

# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Available Functions](#available-functions)
    1. [Mathematical Operations](#mathematical-operations)
    2. [Trigonometry](#trigonometry)
    3. [Factorial, Permutation, Combination](#factorial-permutation-combination)
    4. [Logarithm](#logarithm)
    5. [Mensuration](#mensuration)
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
```js
  const sical = require('sical');

  // Example: Add numbers
  const sum = sical.add(5, 3, 10, 2);
  console.log(sum); // Output: 20

  // Example: Calculate the area of a rectangle
  const areaOfRectangle = sical.recA(4, 6);
  console.log(area); // Output: 24

``` 

# Available Functions
## Mathematical Operations
- add: Add two or more numbers.
- sub: Subtract two numbers.
- mSub: Subtract multiple numbers.
- mul: Multiply numbers.
- div: Divide two numbers.
- square: Calculate the square of a number.
- cube: Calculate the cube of a number.
- abs: Calculate the absolute value of a number.
- sqrRoot: Calculate the square root using Newton's method.
- power: Calculate the exponent.

## Trigonometry
- Functions for converting degrees to radians and vice versa.
- Trigonometric functions such as sinD, cosD, tanD, cosecD, secD, cotD to get trigonometric values from angle in Degree.
- Trigonometric functions such as sinR, cosR, tanR, cosecR, secR, cotR to get trigonometric values from angle in Radian.

## Factorial, Permutation, Combination
- fac: Calculate the factorial of a number.
- per: Calculate the permutation (nPr) of two numbers.
- com: Calculate the combination (nCr) of two numbers.

## Logarithm
- log: Calculate the logarithm with a specified base.
- ln: Calculate the natural logarithm (base e).
- e: Calculate the exponential function (e^x).

## Mensuration
### 2D Shapes
- Rectangle: Area (recA) and Perimeter (recP).
- Square: Area (sqrA) and Perimeter (sqrP).
- Triangle: Area (triA) and Perimeter (triP).
- Circle: Area (cirA) and Circumference (cirP).
### 3D Shapes
- Cube: Volume (cubeV) and Total Surface Area (cubeTSA).
- Rectangular Prism: Volume (recPrismV) and Total Surface Area (recPrismTSA).
- Cylinder: Volume (cylV), Curved Surface Area (cylCSA), and Total Surface Area (cylTSA).
- Cone: Volume (coneV), Curved Surface Area (coneCSA), and Total Surface Area (coneTSA).
- Sphere: Volume (sphrV) and Surface Area (sphrTSA).

# Contributing
Feel free to contribute by opening issues or submitting pull requests on the GitHub repository.

https://github.com/sohailfiza/sical.git

# License
ISC

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
