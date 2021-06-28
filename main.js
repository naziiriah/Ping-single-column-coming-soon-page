const form = document.getElementById('frm')
const inputVoid = document.getElementById('input')

form.addEventListener('submit', displayMessage())

function displayMessage(e){
    e.preventDefault();
    message();
}

function message(){
    
    const inp0t = inputVoid.value.trim()

    if(inp0t === ""){
        setForError(inputVoid,"please submit a valid email")
    }else if (inp0t !== "") {
        
    } else {
        
    }
}
function setForError(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.ClassName = 'my-2  text-center'
}