'use strict';
const calculator = {
    read() {
        const a = prompt('Первое значение');
        const b = prompt('Второе значение');
        if(!isNaN(a) && !isNaN(b) && a.trim() && b.trim()) {
            this.a = +a;
            this.b = +b;
        } else {
            alert('Мне нужны числа. Попробуй еще раз');
            this.read();
        }
    },
    sum() {
        return `${this.a} + ${this.b} = ${this.a + this.b}`;
    },
    mul() {
        return `${this.a} * ${this.b} = ${this.a * this.b}`;
    },
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
