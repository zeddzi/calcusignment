let display = document.getElementsByClassName('display');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
    button.addEventListener('click',(b) => 
    {
        switch (b.target.innerText){
            case 'C':
                display.innerText = '';
                break;
                case 'Del':
                    if(display.innerText){
                        display.innerText = display.innerText.slice(0, -1);
                        break;
                    }
                case '=':
                    display.innerText = eval(display.inner.text);
                    break;
                default:
                    display.innerText += b.target.innerText;
        }
    });
});
