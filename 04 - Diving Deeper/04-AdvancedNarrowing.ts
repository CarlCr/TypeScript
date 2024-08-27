interface Person{
  firstName: string
  lastName: string
}

interface Company{
  name: string
}

function greet(entity: Person | Company){
  if("firstName" in entity){
      console.log(`Hello ${entity.firstName} ${entity.lastName}`)
  }else{
      console.log(`Hello ${entity.name}`)
  }
}

greet({firstName: 'Daniel', lastName: 'Kelly'})
greet({name: 'Vue School'})