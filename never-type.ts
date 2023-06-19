// cuando una funcion se sabe que nunca va a terminar con exito (siempre va a lanzar un error)

function neverFunc(): never {
  throw new Error("The function never ends");
}

// cuando mediante un norrowing se llega a la conclusion de que no cuadra ningun tipo

function seccondNeverFn(parameter: number | string) {
  if (typeof parameter === "number") {
    console.log("parameter es un numero");
  } else if (typeof parameter === "string") {
    console.log("parameter es un string");
    return;
  } else {
    console.log(typeof parameter);
    console.log("parameter es never");
  }
}
