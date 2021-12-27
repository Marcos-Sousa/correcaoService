import { Component,  OnInit } from '@angular/core';
import { Cidade } from 'app/models/cidade.model';
import { CidadeService } from 'app/services/cidade.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.scss'],
})

export class CidadeComponent implements OnInit {
  constructor(
    private cidadeService: CidadeService,

  ) { }

  ngOnInit() {
    this.cidadeService.buscarTodas().subscribe((data: Cidade[])=>{
      console.log(data);
    });
  }

}
