import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from "rxjs/operators";
import { CadastroService } from 'src/app/service/cadastro.service';
import { PageDataService } from 'src/app/service/page.service';


@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  private validadoresNome = Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(255),
    Validators.pattern('[a-zA-Z\u00C0-\u00FF ]+')
  ]);

  private validadoresUserName = Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(255),
    Validators.pattern('[a-z0-9]+')
  ]);

  private validadoresSenha = Validators.compose([
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(255)
  ]);

  private validadoresTelefone = Validators.compose([
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(9),
    Validators.pattern(/^\d{8,9}$/)
  ]);

  public nome = new FormControl('', this.validadoresNome);
  public username = new FormControl('', this.validadoresUserName);
  public senha = new FormControl('', this.validadoresSenha);
  public telefone = new FormControl('', this.validadoresTelefone);
  public avatar = new FormControl('', Validators.required, this.validaImagem.bind(this));

  formCadastro = new FormGroup({
    nome: this.nome,
    username: this.username,
    senha: this.senha,
    telefone: this.telefone,
    avatar: this.avatar
  })

  mensagem = '';

  constructor(private httpRequest: HttpClient
              ,private service: CadastroService
              ,private roteador: Router
              ,private pageDataService: PageDataService) { }

  ngOnInit() {
    this.pageDataService.defineTitulo('Cadastro de Email');
  }

  validaImagem(campo: FormControl){

    const erroValidacao = {
      urlInvalida: true
    }

    return this.httpRequest.head(
      campo.value,
      {
        observe: 'response'
      }
    )
    .pipe(
        map((resposta: HttpResponseBase) => {

          const contentType = resposta.headers.get('Content-Type');

          if(resposta.ok && contentType.includes('image')) {
            return null; // null quer dizer que nao erros de validacao
          } else {
            return erroValidacao
          }
          //se status ok, retorna null, senao retornar obj
        })
        ,catchError(() => {
          return [erroValidacao]
        })
      )
  }

  handleCadastro(){

    if(this.formCadastro.invalid) {
      return this.formCadastro.markAllAsTouched();
    }
    
    //const userDTO = new UserInputDTO(this.formCadastro.value);

    //this.httpRequest.post('http://localhost:3200/users',userDTO)
    this.service.cadastrar(this.formCadastro.value)
    .subscribe(
      (resposta) => {
        console.log(resposta);
        this.mensagem = "Cadastro feito com sucesso!!!"
        this.formCadastro.reset();
      }
      ,(erro: HttpErrorResponse) => {
        this.mensagem = erro.error.body[0].message
      }
      , () => {
        setTimeout(() => {
          this.roteador.navigate(['login']);
        }, 3000)
      }
    );
    
  }

}
