class Fila {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    enfileirar(item) {
        this.items.push(item);
    }

    desenfileirar() {
        return this.items.shift();
    }

    vazia() {
        return this.items.length === 0;
    }
}