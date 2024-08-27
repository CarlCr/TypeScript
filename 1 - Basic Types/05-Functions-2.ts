function greet(name? : string){
  if(name){
      console.log(`Hello ${name}`)
  }else{
      console.log('Hello Stranger')
  }
}

greet('Awesome Vue School Student!')