//Input Character to String
function dis(a) {
    document.getElementById('Result').value += a
}
//Evaluate The String
function cal() {
    document.getElementById('Result').value = eval(document.getElementById('Result').value)
}
//Reset The String
function re() {
    document.getElementById('Result').value = ''
}
//Delete last Character In string
function del() {
    document.getElementById('Result').value = document.getElementById('Result').value.slice(0,-1)
}