// Function to add two or more numbers
function add(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    return numbers.reduce((sum, num) => sum + num, 0);
}

// Function to subtract two numbers
function sub(x, y) {
    return x - y;
}

// Function to subtract multiple numbers
function mSub(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    return numbers.reduce((result, num) => result - num);
}

// Function to multiply numbers
function mul(...numbers) {
    if (numbers.length === 0) {
        return 1;
    }

    return numbers.reduce((product, num) => product * num, 1);
}

// Function to divide two numbers
function div(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Cannot divide by zero";
    }
}

// Function to calculate square
function square(x) {
    return x * x;
}

// Function to calculate cube
function cube(x) {
    return x * x * x;
}

// Function to calculate absolute value
function abs(x) {
    return x < 0 ? -x : x;
}

// Function to calculate square root - Newton's method
function sqrRoot(x) {
    let y = x;
    y = abs(y);
    let guess = y / 2; // Initial guess

    for (let i = 0; i < 10; i++) {
        guess = 0.5 * (guess + y / guess); // Newton's method Iterations
    }

    return x < 0 ? "i" + guess : guess;
}

// Function to calculate exponent
function power(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}


// Trigonometry

// Convert degrees to radians
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to convert radians to degrees
function radToDeg(rad) {
    return rad * (180 / Math.PI);
}

// Function to calculate sine value
function sinD(degrees) {
    return Math.sin(toRadians(degrees));
}

// Function to calculate cosine value
function cosD(degrees) {
    return Math.cos(toRadians(degrees));
}

// Function to calculate tangent value
function tanD(degrees) {
    return Math.tan(toRadians(degrees));
}

// Function to calculate cosecant value
function cosecD(degrees) {
    return 1 / Math.sin(toRadians(degrees));
}

// Function to calculate secant value
function secD(degrees) {
    return 1 / Math.cos(toRadians(degrees));
}

// Function to calculate cotangent value
function cotD(degrees) {
    return 1 / Math.tan(toRadians(degrees));
}

// Function to calculate sine value in radians
function sinR(rad) {
    return Math.sin(rad);
}

// Function to calculate cosine value in radians
function cosR(rad) {
    return Math.cos(rad);
}

// Function to calculate tangent value in radians
function tanR(rad) {
    return Math.tan(rad);
}

// Function to calculate cosecant value in radians
function cosecR(rad) {
    if (Math.sin(rad) !== 0) {
        return 1 / Math.sin(rad);
    } else {
        return "Undefined (cosec is undefined for this angle)";
    }
}

// Function to calculate secant value in radians
function secR(rad) {
    if (Math.cos(rad) !== 0) {
        return 1 / Math.cos(rad);
    } else {
        return "Undefined (sec is undefined for this angle)";
    }
}

// Function to calculate cotangent value in radians
function cotR(rad) {
    if (Math.tan(rad) !== 0) {
        return 1 / Math.tan(rad);
    } else {
        return "Undefined (cot is undefined for this angle)";
    }
}


function fac(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else if (n < 0) {
        return "Undefined (Enter positive number)";
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Function for permutation (nPr)
function per(n, r) {
    if (n < 0 || r < 0 || r > n) {
        return "Undefined (Invalid input)";
    } else {
        return factorial(n) / factorial(n - r);
    }
}

// Function for combination (nCr)
function com(n, r) {
    if (n < 0 || r < 0 || r > n) {
        return "Undefined (Invalid input)";
    } else {
        return factorial(n) / (factorial(r) * factorial(n - r));
    }
}


// Logarithm
// Function to calculate logarithm with a specified base
function log(x, base) {
    if (x <= 0 || base <= 0 || base === 1) {
        return "Undefined (Invalid input)";
    } else {
        return Math.log(x) / Math.log(base);
    }
}

// Function to calculate natural logarithm (base e)
function ln(x) {
    if (x <= 0) {
        return "Undefined (Invalid input)";
    } else {
        return Math.log(x);
    }
}

// Function to calculate exponential function (e^x)
function e(x) {
    return Math.exp(x);
}


// Mensuration


// 2D Shapes

// Rectangle
// Area
function recA(length, width) {
    return length * width;
}
// Perimeter
function recP(length, width) {
    return 2 * (length + width);
}

// Square
// Area
function sqrA(side) {
    return side * side;
}
// Perimeter
function sqrP(side) {
    return 4 * side;
}

// Triangle
// Area
function triA(base, height) {
    return (base * height) / 2;
}
// Perimeter
function triP(side1, side2, side3) {
    return side1 + side2 + side3;
}

// Circle
// Area
function cirA(radius) {
    return Math.PI * radius * radius;
}
// Circumference
function cirP(radius) {
    return 2 * Math.PI * radius;
}


// 3D Shapes

// Cube
// Volume
function cubeV(side) {
    return power(side, 3);
}
// Total Surface Area
function cubeTSA(side) {
    return 6 * power(side, 2);
}

// Rectangular Prism
// Volume
function recPrismV(length, width, height) {
    return length * width * height;
}
// Total Surface Area
function recPrismTSA(length, width, height) {
    return 2 * (length * width + length * height + width * height);
}

// Cylinder
// Volume
function cylV(radius, height) {
    return Math.PI * power(radius, 2) * height;
}

function cylCSA(radius, height) {
    return 2 * Math.PI * radius * height;
}
// Total Surface Area
function cylTSA(radius, height) {
    return 2 * Math.PI * radius * (height + radius);
}

// Cone
// Volume
function coneV(radius, height) {
    return (1/3) * Math.PI * power(radius, 2) * height;
}
// Curved Surface Area
function coneCSA(radius, slantHeight) {
    return Math.PI * radius * slantHeight;
}
// Total Surface Area
function coneTSA(radius, slantHeight) {
    return Math.PI * radius * (slantHeight + radius);
}

// Sphere
// Volume
function sphrV(radius) {
    return (4/3) * Math.PI * power(radius, 3);
}
// Surface Area
function sphrTSA(radius) {
    return 4 * Math.PI * power(radius, 2);
}


module.exports = { add, sub, mSub, mul, div, square, cube, abs, sqrRoot, power,
    degToRad, radToDeg, sinD, cosD, tanD, cosecD, secD, cotD, sinR, cosR, tanR, 
    cosecR, secR, cotR, fac, per, com, log, ln, e, recA, recP, 
    sqrA, sqrP, triA, triP, cirA, cirP, cubeV, cubeTSA, recPrismV, recPrismTSA,
    cylV, cylCSA, cylTSA, coneV, coneCSA, coneTSA, sphrV, sphrTSA};