// let weight
// let height

function bmical(w, h){
    h = h/100
    let bmi = w/(h*h)
    return bmi
}

function check(b){
    let r
    if(b>30){
        r = "อ้วนมาก / โรคอ้วนระดับ 3"
    }if(b>=25 && b<=29.90){
        r = "อ้วน / โรคอ้วนระดับ 2"
    }if(b>=23 && b<=29.90){
        r = "ท้วม / โรคอ้วนระดับ 1"
    }if(b>=18.50 && b<=22.90){
        r = "ปกติ (สุขภาพดี)"
    }if(b<18.50){
        r = "น้ำหนักน้อย / ผอม"
    }
    return r
}  

function getWeight(value){
    let weight = value
    return weight
}

function getHeight(value){
    let height = value
    return height
}

function showbmi(w, h){
    document.getElementById('calbmi').innerHTML = bmical(w, h)
    document.getElementById('result').innerHTML = check(bmical(w, h))
}
