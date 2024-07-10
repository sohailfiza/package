// Function to add two or more numbers
function add(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Function to multiply numbers
function mul(...numbers) {
    if (numbers.length === 0) {
        return 1;
    }
    return numbers.reduce((product, num) => product * num, 1);
}

// Function to add an array of numbers
function addArr(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Function to multiply an array of numbers
function mulArr(numbers) {
    if (numbers.length === 0) {
        return 1;
    }
    return numbers.reduce((product, num) => product * num, 1);
}

// Trigonometry
// Convert degrees to radians
function deg2rad(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to convert radians to degrees
function rad2deg(rad) {
    return rad * (180 / Math.PI);
}

// Function to calculate sine value
function sinD(degrees) {
    const rad = deg2rad(degrees);
    return Math.sin(rad);
}

// Function to calculate cosine value
function cosD(degrees) {
    const rad = deg2rad(degrees);
    return Math.cos(rad);
}

// Function to calculate tangent value
function tanD(degrees) {
    const rad = deg2rad(degrees);
    return Math.tan(rad);
}

// Function to calculate cosecant value
function cosecD(degrees) {
    const rad = deg2rad(degrees);
    return 1 / Math.sin(rad);
}

// Function to calculate secant value
function secD(degrees) {
    const rad = deg2rad(degrees);
    return 1 / Math.cos(rad);
}

// Function to calculate cotangent value
function cotD(degrees) {
    const rad = deg2rad(degrees);
    return 1 / Math.tan(rad);
}

// Factorial
function factorial(n) {
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
function permutation(n, r) {
    if (n < 0 || r < 0 || r > n) {
        return "Undefined (Invalid input)";
    } else {
        return factorial(n) / factorial(n - r);
    }
}

// Function for combination (nCr)
function combination(n, r) {
    if (n < 0 || r < 0 || r > n) {
        return "Undefined (Invalid input)";
    } else {
        return factorial(n) / (factorial(r) * factorial(n - r));
    }
}

// Function to calculate logarithm with a specified base
function log(x, base) {
    if (x <= 0 || base <= 0 || base === 1) {
        return "Undefined (Invalid input)";
    } else {
        return Math.log(x) / Math.log(base);
    }
}

// Function to compare numbers with a small epsilon for precision
function almostEq(a, b) {
    return Math.abs(a - b) <= 9.5367432e-7;
}

// Greatest Common Divisor (GCD)
function gcd(a, b) {
    if (almostEq(b, 0)) return a;
    return gcd(b, a % b);
}

// Least Common Multiple (LCM)
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

// Function to find the precision of a number
function findPrecision(n) {
    let e = 1;
    while (!almostEq(Math.round(n * e) / e, n)) {
        e *= 10;
    }
    return e;
}

// Function to convert a number to fractional representation
function n2f(num) {
    if (num === 0 || num === '0') return '0';
    if (typeof num === 'string') {
        num = parseFloat(num);
    }

    const precision = findPrecision(num);
    const scaledNumber = num * precision;
    const gcdValue = gcd(Math.abs(scaledNumber), precision);

    const numerator = scaledNumber / gcdValue;
    const denominator = precision / gcdValue;

    return Math.round(numerator) + '/' + Math.round(denominator);
}

// GCD of an array of numbers
function gcdArr(numbers) {
    if (numbers.length === 0) return null;
    return numbers.reduce((a, b) => gcd(a, b));
}

// LCM of an array of numbers
function lcmArr(numbers) {
    if (numbers.length === 0) return null;
    return numbers.reduce((a, b) => lcm(a, b));
}

// Convert an array of numbers to fractional representation
function n2fArr(numbers) {
    if (numbers.length === 0) return [];

    return numbers.map(num => n2f(num));
}

// ===========  2D Shapes  ===========
// Polygon
// Sum of Interior Angles of a Polygon
function polygonInteriorAngleSum(totalSide) {
    const deg = (totalSide - 2) * 180;
    const rad = deg2rad(deg);
    return rad;
}

// Interior Angle of a Regular Polygon
function polygonInteriorAngle(totalSide) {
    const deg = ((totalSide - 2) * 180) / totalSide;
    const rad = deg2rad(deg);
    return rad;
}

// Exterior Angle of a Regular Polygon
function polygonExteriorAngle(totalSide) {
    const deg = 360 / totalSide;
    const rad = deg2rad(deg);
    return rad;
}

// Perimeter of an n-sided Regular Polygon
function regularPolygonPerimeter(totalSide, sideLength) {
    return totalSide * sideLength;
}

// Circle
// Area
function circleArea(radius) {
    return Math.PI * radius * radius;
}

// Circumference
function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}

// ===========  3D Shapes  ===========
// Cube
// Volume
function cubeVolume(side) {
    return Math.pow(side, 3);
}

// Total Surface Area
function cubeTSA(side) {
    return 6 * Math.pow(side, 2);
}

// Rectangular Prism
// Volume
function rectangularPrismVolume(length, width, height) {
    return length * width * height;
}

// Total Surface Area
function rectangularPrismTSA(length, width, height) {
    return 2 * (length * width + length * height + width * height);
}

// Cylinder
// Volume
function cylinderVolume(radius, height) {
    return Math.PI * Math.pow(radius, 2) * height;
}

// Curved Surface Area
function cylinderCSA(radius, height) {
    return 2 * Math.PI * radius * height;
}

// Total Surface Area
function cylinderTSA(radius, height) {
    return 2 * Math.PI * radius * (height + radius);
}

// Cone
// Volume
function coneVolume(radius, height) {
    return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
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
function sphereVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

// Surface Area
function sphereTSA(radius) {
    return 4 * Math.PI * Math.pow(radius, 2);
}

// ===========  binary  ===========
// Binary to decimal
function bin2dec(binary) {
    let binaryString = String(binary);

    // Checking input for valid binary string using Regular expressions
    if (!/^-?[01]+(\.[01]+)?$/.test(binaryString)) {
        return 'Invalid input';
    }
    // Extracting sign
    const sign = binaryString.startsWith('-') ? -1 : 1;
    binaryString = binaryString.replace(/^-?/, ''); // Removing sign

    // Splitting binary string into integer and fractional parts
    const [integerPart, fractionalPart] = binaryString.split('.');
    // Converting integer part to decimal
    const integerDecimal = parseInt(integerPart, 2);
    // Converting fractional part to decimal
    let fractionalDecimal = 0;
    if (fractionalPart) {
        for (let i = 0; i < fractionalPart.length; i++) {
            fractionalDecimal += parseInt(fractionalPart[i]) * Math.pow(2, -(i + 1));
        }
    }
    const decimalValue = sign * (integerDecimal + fractionalDecimal);

    return decimalValue;
}

// Binary to octal
function bin2oct(binary) {
    let binaryString = String(binary);

    if (!/^-?[01]+(\.[01]+)?$/.test(binaryString)) {
        return 'Invalid input';
    }
    let sign = '';
    let integerPart = '';
    let fractionalPart = '';

    if (binaryString.startsWith('-')) {
        sign = '-';
        binaryString = binaryString.substring(1); // Removing sign
    }
    // Separate integer and fractional parts
    if (binaryString.includes('.')) {
        [integerPart, fractionalPart] = binaryString.split('.');
    } else {
        integerPart = binaryString;
    }

    // Padding to make groups of 3
    while (integerPart.length % 3 !== 0) {
        integerPart = '0' + integerPart;
    }

    // Splitting integer part into groups of 3
    const integerGroups = integerPart.match(/.{1,3}/g);
    // Converting each group of 3 bits to its octal equivalent
    const octalIntegerPart = integerGroups.map(group => parseInt(group, 2).toString(8)).join('');

    // fractional part to octal
    let octalFractionalPart = '';
    if (fractionalPart) {
        while (fractionalPart.length % 3 !== 0) {
            fractionalPart += '0';
        }
        const fractionalGroups = fractionalPart.match(/.{1,3}/g);
        octalFractionalPart = fractionalGroups.map(group => parseInt(group, 2).toString(8)).join('');
    }

    // Joining the octal integer and fractional parts with the sign
    const octalValue = octalFractionalPart ? `${sign}${octalIntegerPart}.${octalFractionalPart}` : `${sign}${octalIntegerPart}`;

    return octalValue;
}


// Binary to hexadecimal
function bin2hex(binary) {
    let binaryString = String(binary);
    if (!/^-?[01]+(\.[01]+)?$/.test(binaryString)) {
        return 'Invalid input';
    }

    let sign = '';
    let integerPart = '';
    let fractionalPart = '';

    if (binaryString.startsWith('-')) {
        sign = '-';
        binaryString = binaryString.substring(1); // Removing sign
    }

    if (binaryString.includes('.')) {
        [integerPart, fractionalPart] = binaryString.split('.');
    } else {
        integerPart = binaryString;
    }
    while (integerPart.length % 4 !== 0) {
        integerPart = '0' + integerPart;
    }

    // Splitting integer part into groups of 4
    const integerGroups = integerPart.match(/.{1,4}/g);

    // Converting group to hexadecimal
    const hexadecimalIntegerPart = integerGroups.map(group => parseInt(group, 2).toString(16)).join('');

    let hexadecimalFractionalPart = '';
    if (fractionalPart) {
        while (fractionalPart.length % 4 !== 0) {
            fractionalPart += '0';
        }

        const fractionalGroups = fractionalPart.match(/.{1,4}/g);

        hexadecimalFractionalPart = fractionalGroups.map(group => parseInt(group, 2).toString(16)).join('');
    }

    const hexadecimalValue = hexadecimalFractionalPart
        ? `${sign}${hexadecimalIntegerPart}.${hexadecimalFractionalPart}`
        : `${sign}${hexadecimalIntegerPart}`;

    return hexadecimalValue.toUpperCase();
}


// Decimal to binary
function dec2bin(decimalNumber) {
    // Checking input
    if (isNaN(decimalNumber) || typeof decimalNumber !== 'number') {
        return 'Invalid input';
    }

    const sign = decimalNumber < 0 ? '-' : '';
    decimalNumber = Math.abs(decimalNumber);

    // Separating integer and fractional parts
    let integerPart = Math.floor(decimalNumber);
    let fractionalPart = decimalNumber - integerPart;

    // integer part to binary
    let binaryInteger = '';
    if (integerPart === 0) {
        binaryInteger = '0';
    } else {
        while (integerPart > 0) {
            binaryInteger = (integerPart % 2) + binaryInteger;
            integerPart = Math.floor(integerPart / 2);
        }
    }

    // fractional part to binary
    let binaryFractional = '';
    if (fractionalPart > 0) {
        binaryFractional = '.';
        let precision = 16; // maximum precision for fractional part
        while (precision > 0 && fractionalPart > 0) {
            fractionalPart *= 2;
            binaryFractional += Math.floor(fractionalPart);
            fractionalPart -= Math.floor(fractionalPart);
            precision--;
        }
    }

    const binaryResult = sign + binaryInteger + binaryFractional;

    return binaryResult;
}


// Octal to binary
function oct2bin(octal) {
    let octalString = String(octal);

    if (!/^-?[0-7]+(\.[0-7]+)?$/.test(octalString)) {
        return 'Invalid input';
    }

    let sign = '';
    let integerPart = '';
    let fractionalPart = '';

    if (octalString.startsWith('-')) {
        sign = '-';
        octalString = octalString.substring(1);
    }

    // Separating integer and fractional parts
    if (octalString.includes('.')) {
        [integerPart, fractionalPart] = octalString.split('.');
    } else {
        integerPart = octalString;
    }

    let binaryIntegerPart = '';

    // integer part to binary
    for (let i = 0; i < integerPart.length; i++) {
        const octalDigit = parseInt(integerPart[i], 8).toString(2);
        binaryIntegerPart += '000'.substring(octalDigit.length) + octalDigit;
    }

    let binaryFractionalPart = '';

    // fractional part to binary
    if (fractionalPart) {
        for (let i = 0; i < fractionalPart.length; i++) {
            const octalDigit = parseInt(fractionalPart[i], 8).toString(2);
            binaryFractionalPart += '000'.substring(octalDigit.length) + octalDigit;
        }
    }

    const binaryResult = fractionalPart ? `${sign}${binaryIntegerPart}.${binaryFractionalPart}` : `${sign}${binaryIntegerPart}`;

    return binaryResult;
}


// Hexadecimal to binary
function hex2bin(hexadecimal) {
    let hexString = String(hexadecimal).toUpperCase();

    // Checking input for valid hexadecimal string using Regular expressions
    if (!/^-?[0-9A-F]+(\.[0-9A-F]+)?$/.test(hexString)) {
        return 'Invalid input';
    }

    let sign = '';
    let integerPart = '';
    let fractionalPart = '';

    // Extracting the sign bit and hexadecimal value
    if (hexString.startsWith('-')) {
        sign = '-';
        hexString = hexString.substring(1); // Removing sign
    }

    // Separate integer and fractional parts
    if (hexString.includes('.')) {
        [integerPart, fractionalPart] = hexString.split('.');
    } else {
        integerPart = hexString;
    }

    let binaryIntegerPart = '';

    // integer part to binary
    for (let i = 0; i < integerPart.length; i++) {
        const hexDigit = parseInt(integerPart[i], 16).toString(2);
        binaryIntegerPart += '0000'.substring(hexDigit.length) + hexDigit;
    }

    let binaryFractionalPart = '';

    // fractional part to binary
    if (fractionalPart) {
        for (let i = 0; i < fractionalPart.length; i++) {
            const hexDigit = parseInt(fractionalPart[i], 16).toString(2);
            binaryFractionalPart += '0000'.substring(hexDigit.length) + hexDigit;
        }
    }

    const binaryResult = fractionalPart ? `${sign}${binaryIntegerPart}.${binaryFractionalPart}` : `${sign}${binaryIntegerPart}`;

    return binaryResult;
}


// Addition of two or more binary numbers
function binaryAdd(...binaryNumbers) {
    // Converting binary numbers to decimal
    const binaryStrings = binaryNumbers.map(String)
    const decimalNumbers = binaryStrings.map(bin2dec);

    // Adding decimal numbers
    const decimalSum = decimalNumbers.reduce((acc, num) => acc + num, 0);

    // Convert the decimalSum to binary
    const binaryResult = dec2bin(decimalSum);

    return binaryResult;
}

// Multiplication of two or multiple binary numbers
function binaryMul(...binaryNumbers) {
    // Converting binary numbers to decimal
    const binaryStrings = binaryNumbers.map(String)
    const decimalNumbers = binaryStrings.map(bin2dec);

    // Multiplying decimal numbers
    const decimalSum = decimalNumbers.reduce((acc, num) => acc * num, 1);

    // decimal to binary
    const binaryResult = dec2bin(decimalSum);

    return binaryResult;
}

module.exports = {
    add,
    mul,
    deg2rad,
    rad2deg,
    sinD,
    cosD,
    tanD,
    cosecD,
    secD,
    cotD,
    factorial,
    permutation,
    combination,
    log,
    gcd,
    lcm,
    n2f,
    polygonInteriorAngleSum,
    polygonInteriorAngle,
    polygonExteriorAngle,
    regularPolygonPerimeter,
    circleArea,
    circleCircumference,
    cubeVolume,
    cubeTSA,
    rectangularPrismVolume,
    rectangularPrismTSA,
    cylinderVolume,
    cylinderCSA,
    cylinderTSA,
    coneVolume,
    coneCSA,
    coneTSA,
    sphereVolume,
    sphereTSA,
    binaryAdd, binaryMul, bin2dec, bin2oct, bin2hex, dec2bin, oct2bin, hex2bin
};