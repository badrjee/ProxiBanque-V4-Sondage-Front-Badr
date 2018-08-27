import { DatePipe } from "@angular/common";

export class Sondage {
    public id: number;
    public dateDebut: DatePipe;
    public dateFermeture: DatePipe;
    public dateFin: Date;

    toString(){
        return `[Sondage id=${this.id}, dateDebut=${this.dateDebut}, dateFerrmeture=${this.dateFermeture}, dateFin=${this.dateFin}]`
    }

    getId(){
        return this.id;
    }

}