const Fila = require('./Fila');

test('Enfileirar item', () => {
    const fila = new Fila();
    fila.enfileirar('item 1');
    fila.enfileirar('item 2');
    expect(fila.items.length).toBe(2);
    expect(fila.items[0]).toBe('item 1');
    expect(fila.items[1]).toBe('item 2');
});

test('Desenfileirar item', () => {
    const fila = new Fila();
    fila.enfileirar('item 1');
    fila.enfileirar('item 2');
    const itemDesenfileirado = fila.desenfileirar();
    expect(itemDesenfileirado).toBe('item 1');
    expect(fila.items.length).toBe(1);
    expect(fila.items[0]).toBe('item 2');
});

test('Verificar se a fila está vazia', () => {
    const fila = new Fila();
    expect(fila.vazia()).toBe(true);
    fila.enfileirar('item 1');
    expect(fila.vazia()).toBe(false);
    fila.desenfileirar();
    expect(fila.vazia()).toBe(true);
});