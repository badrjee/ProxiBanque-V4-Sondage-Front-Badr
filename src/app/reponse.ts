export class Reponse {
  commentaire: string;
  statut : boolean;

  toString() {
    return `[commentaire=${this.commentaire}, statut=${this.statut}]`
  }
}
