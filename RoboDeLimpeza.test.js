const RoboDeLimpeza = require('./RoboDeLimpeza');

test('Adicionar tarefas', () => {
    const robo = new RoboDeLimpeza();
    robo.adicionarTarefas(['tarefa 1', 'tarefa 2']);
    expect(robo.tarefas.length).toBe(2);
    expect(robo.tarefas[0]).toBe('tarefa 1');
    expect(robo.tarefas[1]).toBe('tarefa 2');
});

test('Executar próximas tarefas', () => {
    const robo = new RoboDeLimpeza();
    robo.adicionarTarefas(['tarefa 1', 'tarefa 2']);
    const tarefaExecutada = robo.executarProximasTarefas();
    expect(tarefaExecutada).toBe('tarefa 1');
    expect(robo.tarefas.length).toBe(1);
    expect(robo.tarefas[0]).toBe('tarefa 2');
});

test('Executar todas as tarefas', () => {
    const robo = new RoboDeLimpeza();
    robo.adicionarTarefas(['tarefa 1', 'tarefa 2']);
    const tarefasExecutadas = robo.executarTodasAsTarefas();
    expect(tarefasExecutadas).toEqual(['tarefa 1', 'tarefa 2']);
    expect(robo.tarefas.length).toBe(0);
});