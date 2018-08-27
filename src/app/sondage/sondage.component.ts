import { Component, OnInit, Input, Output } from '@angular/core';
import { SondageServiceService } from '../Services/sondage-service.service';
import { Sondage } from '../sondage';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css']
})
export class SondageComponent implements OnInit {

  @Input() sondage: Sondage;
  @Output() showClient: boolean;
  @Output() showReponse: boolean;


  constructor(private sondageService: SondageServiceService) {
   
    this.showClient=false;
    this.showReponse=false;

  }

  ngOnInit() {
    this.sondageService.getSondage().subscribe((sondage) => {
      this.sondage = sondage;
      console.log(this.sondage)
    });
  }

}
