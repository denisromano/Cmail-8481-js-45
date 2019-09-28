import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: [ './cmail-list-item.component.css']
})
export class CmailListItemComponent implements OnInit {

  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() conteudo = '';
  @Input() dataDeEnvio = '';
  @Output('eventoVaiRemover') cliclouNaLixeira = new EventEmitter;

  constructor() { }

  apagarEmail(click: Event){
    console.log('cliclou na lixeira');
    if(confirm('tem certeja, Jose?')) {
      console.log('confirmou');
      this.cliclouNaLixeira.emit({status: 'removing'});
    }
    
  }

  ngOnInit() {
  }

}
