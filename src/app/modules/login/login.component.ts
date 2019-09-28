import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInputDTO } from 'src/app/models/dto/LoginInputDTO';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  private validadorEmail = Validators.compose([
    Validators.required,
    //Validators.pattern('/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
  ]);

  private validadoresPassword = Validators.compose([
    Validators.required,
    //Validators.minLength(6),
    Validators.maxLength(255)
  ]);

  public email = new FormControl('', this.validadorEmail);
  public password = new FormControl('', this.validadoresPassword);

  formLogin = new FormGroup({
    email: this.email,
    password: this.password
  })

  mensagem = '';

  constructor(private service: LoginService, private roteador: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    
    if(this.formLogin.valid){
      const loginDTO = new LoginInputDTO(this.formLogin.value);
      console.log(loginDTO);
      
    //  this.httpRequest
    //    .post('http://localhost:3200/login', loginDTO)
      this.service.autenticar(this.formLogin.value)
          .subscribe(
            (response) => {
              console.log(response);
              console.log('deu certo');
              this.roteador.navigate(['']);
            },
            (erro: HttpErrorResponse) => {
              this.mensagem = erro.error
              console.error(erro);
              console.log('deu ruim');
              
            }
          );
    }
  }

}
