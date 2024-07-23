const screen = document.querySelector('#input');
const screenOutput = document.querySelector('#output');
const inp = document.querySelectorAll('.key');


    // screen.style.color = 'white';
    string = '';

inp.forEach(e => {
    e.addEventListener('click', () => {
        // console.log(e.value)
        screen.value += e.value
        values = screen.value;

        if(e.value === "="){
            console.log(values);
            screenOutput.value = eval(values.substring(0, screen.value.length - 1 ));
            screen.value = screen.value.substring(0, screen.value.length - 1 );
        }
        if (e.value === 'C') {
            screen.value = "";
            screenOutput.value = '';
        }
        if (e.value === 'Del') {
            screen.value = screen.value.substring(0, screen.value.length - 4 );
        }

    })
})

console.log("we^".substring(0, 3 - 1))
