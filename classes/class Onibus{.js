class Onibus{
    /*a palavra reservada constructor serve para transformar a classe em objeto,
    guardando em memória os dados do objeto(o estado)
    dentro do constructor são declarados os atributos (attributes),
    ou seja as características da entidade que a classe quer representar.
    A palavra reservada this se refere aos atributos declarados que fazem parte desta classe, são variáveis internas da classe. */
        constructor(marca, modelo, ano, assentos, motorista) {
            this.marca = marca;
            this.modelo = modelo;
            this.ano = ano;
            this.assentos = assentos;
            this.motorista = motorista;
          }
    /*a partir daqui tem a declaração e implementação dos métodos ou funções,
     que são o comportamento da classe, ou seja o que a classe faz. */
          acelerar() {
            console.log(`${this.marca} ${this.modelo} Acelerando...`);
          }
          frear() {
            console.log(`${this.marca} ${this.modelo} Freando...`);
          }
          adicionarAssento() {
            if (this.assentos < 50) {
              this.assentos++;
              console.log(`Assento adicionado. Total de assentos: ${this.assentos}`);
            } else {
              console.log(`Não é possível adicionar mais assentos.`);
            }
          }
          removerAssento() {
            if (this.assentos > 0) {
              this.assentos--;
              console.log(`Assento removido. Total de assentos: ${this.assentos}`);
            } else {
              console.log(`Não há mais assentos para remover.`);
            }
          }
          alterarMotorista(novoMotorista) {
            this.motorista = novoMotorista;
            console.log(`Motorista alterado para ${novoMotorista}.`);
          }
    };
    