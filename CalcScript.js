const display = document.getElementById(`displayOutput`)

function appendChar(char){
    display.value += char
}

const value = display.value

function clearDisplay(){
    display.value = ``
}

function del(){
    const storeValue = display.value
    display.value = display.value.slice(0, storeValue.length-1)
}

function calculate(){
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value = `Error`
    }
}


const letter = `javascript language`
const store  = letter.slice(0,7)
for(let i=0; i<letter.length; i++){
    console.log(letter[i])
}
console.log(store)