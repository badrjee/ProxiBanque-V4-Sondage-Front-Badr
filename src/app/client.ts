export class Client {

    id:number;
    nom: string;
    prenom: string;
    numero: string;
    mail: string;
    telephone: string;

    toString(){
        return `[nom=${this.nom}, prenom=${this.prenom}, numero=${this.numero}, mail=${this.mail}, telephone=${this.telephone}]`
    }
}