/*
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++){
    console.log(yield i)
  };
}


let gen = generateSequence(2,100)

for (i = 0; i < 100; i++){
  console.log(gen.next())
}
*/

/*
let array = [0, 1, ]

function fibo (n) {
  for(let i = 2; i <= n; i++ ){
    let total = array[i - 1] + array[i - 2]
    array.push(total)
    

  }

}

fibo(10)
console.log(array)
*/

/*
function l () {
  let names = ["camilo", "perez", "torres"];
  let proxy = new proxy (names, {
    get: function(target, property) {
      return property === "length" ? 
        target.length:
        target[property]?.toUpperCase()
    },
    set: function(target, property, value){

    }
  })
}
*/

/*
function curry(func) {
  console.log(func.length)
  return function curried(...args) {
    console.log(args.length)
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        console.log(args2)
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function suma(a, b, c) {
  return a + b + c;
}

let sumaCurried = curry(suma);

console.log(sumaCurried(1)(2)(3)); // Output: 6
*/

/*
let buffer = new ArrayBuffer(16); // crea un buffer de longitud 16

let view = new Uint32Array(buffer); // trata el buffer como una secuencia de enteros de 32 bits
*/

// escribamos un valor

/*
view[0] = 123456;
console.log(view)
// iteración sobre los valores
for(let num of view) {
  
}

function convertToRoman(num) {
  let arr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let roman = "";

  for (let i = 0; i < arr.length; i++) {
    while (num >= getValue(arr[i])) {
      console.log( num -= getValue(arr[i]))
    }
  }

  return roman;
}

// Helper function to get the numerical value of a Roman numeral
function getValue(roman) {
  switch (roman) {
    case "I": return 1;
    case "IV": return 4;
    case "V": return 5;
    case "IX": return 9;
    case "X": return 10;
    case "XL": return 40;
    case "L": return 50;
    case "XC": return 90;
    case "C": return 100;
    case "CD": return 400;
    case "D": return 500;
    case "CM": return 900;
    case "M": return 1000;
    default: return 0;
  }
}

console.log(convertToRoman(36)); // Output: XXXVI
*/



/*
// Crear un buffer
let buffer = new Uint8Array([255, 255, 255, 255]).buffer;
console.log(buffer)

// Crear un DataView sobre el buffer
let dataView = new DataView(buffer);
console.log(dataView)
// Obtener un número de 16 bits en el offset 0
console.log(dataView.getUint16()); // 65535 (mayor entero sin signo de 16 bits)

// Poner a cero el número de 4 bytes en el offset 0
dataView.setUint32(0, 0);


let uint8Array = new Uint8Array([72, 111, 108, ]);

console.log(( new TextDecoder().decode(uint8Array) )); // Hola


let texto = "perros";
let usint8Array = new TextEncoder().encode(texto);

console.log(usint8Array); // Esto imprimirá los valores numéricos correspondientes a los caracteres de "Hola"
*/

class Operaciones {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  
  get suma() {
    return this.total = this.a + this.b;
  }

  set resta(perro) {
    this.suma;
    
    console.log(this.total, perro);
  }
}

let n = new Operaciones(2, 3);
console.log(n.resta = "danes")