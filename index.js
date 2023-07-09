let num = Math.floor(Math.random() * 1000)

console.log('Загадано: ', num)

const Unum = prompt("Введите число от 0 до 1000: ")

console.log("Вы ввели ", Unum)
if (Unum === "" || ((isNaN(Unum) || (+Unum > 1000)))){
    alert('Ввод не соответствует условию!')
} else if (num == Unum) {
    alert('Вы угадали!')
} else {
    if (num > Unum){
        alert('Вы не угадали! Загаданное число больше введенного.')
    } else {
        alert('Вы не угадали! Загаданное число меньше введенного.')
    }
}