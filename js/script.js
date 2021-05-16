var a = confirm('Вы истинный фанат BTS?')
console.log();
if(a){
    var b = prompt('Ваш фандом ?(писать на англ с большими буквами)')
    var c = +prompt('7-1=?')
    if(c === 0, b === 'ARMY'){
        alert('Добро пожаловать ARMY!')
    }else{
        alert('ОШИБКА! ПРОЩАЙТЕ!!!')
    }
}else if(!a){
    var a1 = confirm('Хотите стать участником нашего фандома?')
    if (a1){
        var b2 = prompt('Ваше Имя...')
        var c2 = +prompt('ваш пол? (1-муж, 2-жен отвечать цифрами!')
        if(c2 === 1){
            alert('Добро пожаловать ФанBoy ' + b2)
        }else if(c2 === 2){
            alert('Добро пожаловать ФанGirl ' + b2)
        }else{
            alert('Ошибка!!!')
        }
    }else if(!a1){
        alert('Bye!')
    }
}