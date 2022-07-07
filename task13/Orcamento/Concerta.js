export class Concerta {
    dataEstimada = new Date();

    constructor(tempoConcertoEmDias) {
        this.dataEstimada.setDate(
            this.dataEstimada.getDate() + tempoConcertoEmDias
        );
    }
}