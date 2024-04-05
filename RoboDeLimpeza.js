class RoboDeLimpeza {
    constructor() {
        this.tarefas = [];
        this.tarefasConcluidas = [];
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }

    executarProximaTarefa() {
        const tarefa = this.tarefas.shift();
        tarefa();
        this.tarefasConcluidas.push(tarefa);
    }

    executarTodasAsTarefas() {
        while (!this.vazio()) {
            this.executarProximaTarefa();
        }
    }
}