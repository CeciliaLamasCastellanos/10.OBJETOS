const simpleExercise = [
    {a: 11,
    b:224,
    name: "M48 Bulldog"},
    {a:23,
    b:56,
    name: "Object 140"}, 
    {a: 32,
    b:75,
    name: "T57 Heavy"}
];

function sumayconcatena(array){
    let text="";
    for (let i=0; i<array.length; i++){
        let partialText=`${array[i].a + array[i].b} ${array[i].name}`;
        text=text !=""? text.concat('-=-',partialText):partialText;
    }
    return text;
}

console.log(sumayconcatena(simpleExercise));