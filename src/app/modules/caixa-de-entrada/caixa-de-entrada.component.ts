import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/service/email.service';
import { Email } from 'src/app/models/Email';
import { PageDataService } from 'src/app/service/page.service';
import { HeaderDataService } from 'src/app/service/header.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent implements OnInit {
  termoParaFiltro: string;

  constructor(private servico: EmailService
            , private pageDataService: PageDataService
            , private headerService: HeaderDataService) { }

  ngOnInit() {
    this.listarEmails();
    this.pageDataService.defineTitulo('Caixa de Entrada - CMail');
    this.headerService.valorDoFiltro
      .subscribe(novoValor => this.termoParaFiltro = novoValor)
  }
  

  listaEmail: Email[] = [];

  email = { destinatario: '', 
            assunto: '', 
            conteudo: ''}

  private _isNewEmailFormOpen = false;

  get isNewEmailFormOpen(){
    return this._isNewEmailFormOpen;
  }

  listarEmails() {
    this.servico.listar()
    .subscribe(
    listaEmailApi => this.listaEmail = listaEmailApi
    ,erro => console.log(erro)     
  )
  }
  toogleNewEmailForm(){
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleDeleteEmail(cliclouNaLixeira, emailId){
    console.log(cliclouNaLixeira);
    console.log(emailId);
    console.log('chamada de apaga email');
    if(cliclouNaLixeira.status === 'removing'){
      console.log('pode apagar');
      this.servico.deletar(emailId)
      .subscribe(
        res => {
          console.log(res);
          this.listaEmail = this.listaEmail.filter(email => email.id != emailId)         
        }
        ,err => console.error(err)
        
      )
      
    }
    
  }

  handleNewEmail(formEmail: NgForm){

    if(formEmail.invalid){ 
      formEmail.control.markAllAsTouched(); 
      return;
    }

    this.servico
      .enviar(this.email)
      .subscribe(
        (resposta) => {
          console.log('Deu Bom', resposta)
          // this.listaEmail.push({
          //   destinatario: this.email.destinatario,
          //   assunto: this.email.assunto,
          //   conteudo: this.email.conteudo
          // });   
          formEmail.reset();   
        }
        ,(erro) => {
          console.log('deu ruim', erro);
          
        }
      )

    
  }

}
