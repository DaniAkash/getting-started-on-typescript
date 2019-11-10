function greet(user:string, greeting:string = "Hello"):string {
  return `${greeting}, ${user}`;
}

const message: string = greet("Dani");

console.log(message);

type Salutation = {
  user:string, 
  greeting?:string
}

function greetWithObject({user, greeting = "Hello"}:Salutation):string {
  return `${greeting}, ${user}`;
}

const message2: string = greetWithObject({user: "Dani"});

console.log(message2);