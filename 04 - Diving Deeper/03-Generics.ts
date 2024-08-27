interface Person{
  name: string
  age: number 
}

const me: Person = {
  name: 'Daniel',
  age: 34
}

const clone = <T> (value: T): T=>{
  const json = JSON.stringify(value)
  return JSON.parse(json)
}

const books: string[] = ['Harry Potter', 'Jurrasic Park', 'Goodnight Moon']
const bookCopies = clone<string[]>(books)
bookCopies.push('Project Hail Mary')