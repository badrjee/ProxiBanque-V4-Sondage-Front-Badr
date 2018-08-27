import {Component, OnInit} from '@angular/core';
import {HttptestService} from '../httptest.service';
import {Reponse} from '../reponse';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // tableau de réponse
  reponses: Reponse[];

  // invocation du service
  constructor(private httpTest: HttptestService) {
  }

  ngOnInit() {
  }

  add(commentaire: string): void {
    commentaire = commentaire.trim();
    if (!commentaire) {
      return;
    }
    this.httpTest.createReponse({commentaire} as Reponse)
      .subscribe(reponse => {
        this.reponses.push(reponse);
      });
  }

}
