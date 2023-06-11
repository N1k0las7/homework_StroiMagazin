let plos = document.getElementById('in1')
let glub = document.getElementById('in2')
let price = document.getElementById('in3')
let but = document.getElementById('but')
let out = document.getElementById('out')
let kol = document.getElementById('in4')
let but1 = document.getElementById('but1')
let out1 = document.getElementById('out1')


but.onclick = f1

function f1() {
    let result = plos.value * glub.value * price.value
    console.log(result)
    out.innerText = result + ' рублей стоимость одного кубометра фундамента '
}

but1.onclick = f2

function f2(){
    let result = kol.value * 1500
    let skidka1 = result - (result* 0.05)
    let skidka2 = result - (result* 0.1)
    let skidka3 = result - (result* 0.2)
    console.log(result)
    out1.innerText = result 
    if(kol.value >= 100){
        out1.innerText = skidka1 + ' рублей с учетом скидки 5%'
    }
    if(kol.value >= 200){
        out1.innerText = skidka2 + ' рублей с учетом скидки 10%'
    }
    if(kol.value >= 300){
        out1.innerText = skidka3 + ' рублей с учетом скидки 20%'
    }
}
