// current temperature
const kelvin=0;
//covertion kelvin to celsius
const cel = kelvin - 273;
// convert celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// round f var
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);

