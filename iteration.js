for (let i =0; i < 10; i++){
    // console.log(i)
}

let names = ['Noel', 'Noe' , 'No', 'N']

for (let index = 0; index < names.length; index++) {
   
   console.log(names[index]);
}


names.forEach((name, index) => {
    console.log(name , index);
});


let rolls = []

for(let i = 0; i < 10;  i++){
    const roll = Math.ceil(Math.random() * 6 );
    
    rolls.push(roll)
    
}

rolls.forEach(roll => {
    console.log(rolls);
});





