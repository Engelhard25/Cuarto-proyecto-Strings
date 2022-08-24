let nombre = "Engelhard";
let apellido = "Pacheco";
let estudiante = nombre.concat(" ", apellido);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let longitud_str = estudiante.length;
let primera_letra_nombre = nombre.slice(0 , 1);
let ultima_letra_apellido = apellido.slice(apellido.length - 1 , apellido.length);
let estudiante_sin_espacios = estudiante.replace(/ /g , "");
let boolean_string = estudiante.includes(nombre);

console.log(nombre);
console.log(apellido);
console.log(estudiante)
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(longitud_str);
console.log(primera_letra_nombre)
console.log(ultima_letra_apellido)
console.log(estudiante_sin_espacios)
console.log(boolean_string)