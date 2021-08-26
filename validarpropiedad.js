var Car = {
    wheels: 4,
    company: 'honda',
    name: 'civic',
    year: 2016
}
function validar(propiedad){
if(Car.hasOwnProperty(propiedad)){
    console.log('true')}
else{console.log('false')}    
}
validar('cecilia');