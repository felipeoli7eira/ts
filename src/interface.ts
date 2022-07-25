interface Veiculo {
    acelerar: () => void,
    frear: () => void,
    qtdRodas: number
}

interface Moto extends Veiculo {
    possuiCapacete: boolean,
    darGrau: () => void
}

class Bross implements Moto {
    
}