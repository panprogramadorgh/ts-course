interface Trevor {
  age: number;
  mad(): void;
}

interface Michael {
  age: number;
  shootingAccuracy(): void;
}

type Caracter = Trevor | Michael;

// type guard function

function isMichael(gameCaracter: Caracter): gameCaracter is Michael {
  return (gameCaracter as Michael).shootingAccuracy !== undefined;
}

function playGta(gameCaracter: Caracter): void {
  const caracterIsMichael = isMichael(gameCaracter);
  if (caracterIsMichael) {
    gameCaracter.shootingAccuracy();
    console.log("Trevor");
    return;
  }
  gameCaracter.mad();
  console.log("Michael");
}

// runnning functions

playGta({
  age: 52,
  mad() {
    console.log("I am mad !");
  },
});

playGta({
  age: 52,
  shootingAccuracy() {
    console.log("Shot!");
  },
});
