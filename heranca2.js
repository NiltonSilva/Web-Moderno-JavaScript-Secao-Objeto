/*
Object.prototype.atri0 = 'Z'
const avo = {
    atri1: 'A'
}

const pai = {
    __proto__: avo, atri2: 'B'
}

const filho = {
    __proto__: pai, atri3: 'C'
}

console.log(filho.atri0, filho.atri1, filho.atri2, filho.atri3)
*/

const carro = {
   velAtual: 0,
   velMax: 200,
   acelerarMais(delta) {
       if(this.velAtual + delta <= this.velMax){
           this.velAtual += delta
       } else {
           this.velAtual = this.velMax
       }
   },
   status (){
       return `${this.velAtual}km/h de ${this.velMax}km/h.`
   }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(300)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())