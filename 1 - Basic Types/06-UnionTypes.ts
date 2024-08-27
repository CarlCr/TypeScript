function printId(id: number | string){
  if(typeof id === 'string'){
      console.log(id.toUpperCase())
  }else{
      console.log(id)
  }
  
}