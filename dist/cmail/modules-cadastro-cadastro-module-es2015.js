(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-cadastro-cadastro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/cadastro/cadastro.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/cadastro/cadastro.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\n  <cmail-header></cmail-header>\n  <main class=\"mdl-layout__content\">\n    <div class=\"page-content\">\n      <p *ngIf=\"mensagem\">\n      {{mensagem}}\n      </p>\n      <div class=\"mdl-grid\">\n        <form [formGroup]=\"formCadastro\" (ngSubmit)=\"handleCadastro()\">\n          <!--NOME-->\n          <cmail-form-group idCampo = \"nome\" textoDaLabel = \"Nome\" [isInvalid]=\"nome.invalid && nome.touched\">\n            <input formControlName=\"nome\" required type=\"text\" name=\"nome\" cmailFormField>\n            \n            <span *ngIf=\"nome.getError('required')\" class=\"mdl-textfield__error\">Informar um nome é obrigatório!</span>\n            <span *ngIf=\"nome.getError('minlength')\" class=\"mdl-textfield__error\">\n              O nome deve conter \n              {{nome.getError('minlength').requiredLength}} caracteres\n            </span>\n            <span *ngIf=\"nome.getError('maxlength')\" class=\"mdl-textfield__error\">\n              O nome deve conter \n              {{nome.getError('maxlength').requiredLenght}} caracteres\n            </span>\n            <span *ngIf=\"nome.getError('pattern') && !nome.getError('minlength') && !nome.getError('maxlength')\" class=\"mdl-textfield__error\">O campo deve conter apenas letras</span>\n          </cmail-form-group>\n\n          <!--USERNAME-->\n          <cmail-form-group idCampo = \"username\" textoDaLabel = \"Nome de Usuario\" [isInvalid]=\"username.invalid && username.touched\">\n              <input formControlName=\"username\" required type=\"text\" name=\"username\" cmailFormField>\n              <span *ngIf=\"username.getError('required')\" \n                class=\"mdl-textfield__error\">Informar um username é obrigatório!\n              </span>\n            <span *ngIf=\"username.getError('minlength')\" class=\"mdl-textfield__error\">\n              O username deve conter \n              {{username.getError('minlength').requiredLength}} caracteres\n            </span>\n            <span *ngIf=\"username.getError('maxlength')\" class=\"mdl-textfield__error\">\n              O username deve conter \n              {{username.getError('maxlength').requiredLenght}} caracteres\n              </span>\n            <span *ngIf=\"username.getError('pattern') && !username.getError('minlength') && !username.getError('maxlength')\" class=\"mdl-textfield__error\">O campo deve conter apenas letras</span>\n          </cmail-form-group> \n            \n          <!--SENHA-->\n          <cmail-form-group idCampo = \"senha\" textoDaLabel = \"Senha\" [isInvalid]=\"senha.invalid && senha.touched\">\n              <input formControlName=\"senha\" required type=\"password\" name=\"senha\" cmailFormField>\n              <span *ngIf=\"senha.getError('required')\" \n                class=\"mdl-textfield__error\">Informar um senha é obrigatório!</span>\n            <span *ngIf=\"senha.getError('minlength')\" class=\"mdl-textfield__error\">\n              O senha deve conter \n              {{senha.getError('minlength').requiredLength}} caracteres\n            </span>\n            <span *ngIf=\"senha.getError('maxlength')\" class=\"mdl-textfield__error\">\n              O senha deve conter \n              {{senha.getError('maxlength').requiredLenght}} caracteres\n            </span>\n            <span *ngIf=\"senha.getError('pattern') && !senha.getError('minlength') && !senha.getError('maxlength')\" \n               class=\"mdl-textfield__error\">O campo deve conter apenas letras\n            </span>\n          </cmail-form-group>            \n\n          <!--TELEFONE-->\n          <cmail-form-group idCampo = \"telefone\" textoDaLabel = \"Telefone\" [isInvalid]=\"telefone.invalid && telefone.touched\">\n            <input minlength=\"8\" maxlength=\"9\" formControlName=\"telefone\" required type=\"text\" name=\"telefone\" cmailFormField>\n            <span *ngIf=\"telefone.getError('required')\" \n            class=\"mdl-textfield__error\">Informar um telefone é obrigatório!</span>\n            <span *ngIf=\"telefone.getError('minlength') && telefone.getError('pattern')\" class=\"mdl-textfield__error\">\n              O telefone deve conter \n              {{telefone.getError('minlength').requiredLength}} caracteres\n            </span>\n            <span *ngIf=\"telefone.getError('maxlength') && telefone.getError('pattern')\" class=\"mdl-textfield__error\">\n              O telefone deve conter \n              {{telefone.getError('maxlength').requiredLenght}} caracteres\n            </span>\n            <span *ngIf=\"telefone.getError('pattern') && !telefone.getError('minlength') && !telefone.getError('maxlength')\" class=\"mdl-textfield__error\">O campo deve conter apenas numeros</span>\n        </cmail-form-group> \n\n        <!--AVATAR-->\n          <cmail-form-group idCampo = \"avatar\" textoDaLabel = \"Avatar\" [isInvalid]=\"avatar.invalid && avatar.touched\">\n              <input formControlName=\"avatar\" required type=\"text\" name=\"avatar\" cmailFormField>\n              <span *ngIf=\"avatar.getError('required')\" \n              class=\"mdl-textfield__error\">Informar um avatar é obrigatório!\n              </span>\n              <span *ngIf=\"avatar.getError('urlInvalida')\" \n              class=\"mdl-textfield__error\">Esta url não é valida!\n              </span>\n              <span *ngIf=\"avatar.status == 'PENDING'\" \n              class=\"mdl-textfield__error mdl-textfield__checking\"> Verificando....\n              </span>\n              <span *ngIf=\"avatar.status == 'VALID'\" \n              class=\"mdl-textfield__error mdl-textfield__valid\">Imagem valida!\n              </span>\n          </cmail-form-group>\n\n          <div class=\"mdl-card__actions\">\n            <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--accent\">\n              Cadastrar\n            </button>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/models/dto/UserInputDTO.ts":
/*!********************************************!*\
  !*** ./src/app/models/dto/UserInputDTO.ts ***!
  \********************************************/
/*! exports provided: UserInputDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInputDTO", function() { return UserInputDTO; });
class UserInputDTO {
    constructor({ nome, username, telefone, senha, avatar }) {
        this.name = "";
        this.username = "";
        this.phone = "";
        this.password = "";
        this.avatar = "";
        this.name = nome;
        this.username = username;
        this.phone = telefone;
        this.password = senha;
        this.avatar = avatar;
    }
}
UserInputDTO.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/app/modules/cadastro/cadastro-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/cadastro/cadastro-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CadastroRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroRoutingModule", function() { return CadastroRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro.component */ "./src/app/modules/cadastro/cadastro.component.ts");




const routes = [
    {
        path: '',
        component: _cadastro_component__WEBPACK_IMPORTED_MODULE_3__["CadastroComponent"]
    }
];
let CadastroRoutingModule = class CadastroRoutingModule {
};
CadastroRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CadastroRoutingModule);



/***/ }),

/***/ "./src/app/modules/cadastro/cadastro.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/cadastro/cadastro.component.ts ***!
  \********************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_service_cadastro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/cadastro.service */ "./src/app/service/cadastro.service.ts");







let CadastroComponent = class CadastroComponent {
    constructor(httpRequest, service, roteador) {
        this.httpRequest = httpRequest;
        this.service = service;
        this.roteador = roteador;
        this.validadoresNome = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z\u00C0-\u00FF ]+')
        ]);
        this.validadoresUserName = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9]+')
        ]);
        this.validadoresSenha = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)
        ]);
        this.validadoresTelefone = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(9),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{8,9}$/)
        ]);
        this.nome = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.validadoresNome);
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.validadoresUserName);
        this.senha = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.validadoresSenha);
        this.telefone = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.validadoresTelefone);
        this.avatar = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validaImagem.bind(this));
        this.formCadastro = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: this.nome,
            username: this.username,
            senha: this.senha,
            telefone: this.telefone,
            avatar: this.avatar
        });
        this.mensagem = '';
    }
    ngOnInit() {
    }
    validaImagem(campo) {
        const erroValidacao = {
            urlInvalida: true
        };
        return this.httpRequest.head(campo.value, {
            observe: 'response'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((resposta) => {
            const contentType = resposta.headers.get('Content-Type');
            if (resposta.ok && contentType.includes('image')) {
                return null; // null quer dizer que nao erros de validacao
            }
            else {
                return erroValidacao;
            }
            //se status ok, retorna null, senao retornar obj
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => {
            return [erroValidacao];
        }));
    }
    handleCadastro() {
        if (this.formCadastro.invalid) {
            return this.formCadastro.markAllAsTouched();
        }
        //const userDTO = new UserInputDTO(this.formCadastro.value);
        //this.httpRequest.post('http://localhost:3200/users',userDTO)
        this.service.cadastrar(this.formCadastro.value)
            .subscribe((resposta) => {
            console.log(resposta);
            this.mensagem = "Cadastro feito com sucesso!!!";
            this.formCadastro.reset();
        }, (erro) => {
            this.mensagem = erro.error.body[0].message;
        }, () => {
            setTimeout(() => {
                this.roteador.navigate(['login']);
            }, 3000);
        });
    }
};
CadastroComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_service_cadastro_service__WEBPACK_IMPORTED_MODULE_6__["CadastroService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CadastroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cmail-cadastro',
        template: __webpack_require__(/*! raw-loader!./cadastro.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/cadastro/cadastro.component.html")
    })
], CadastroComponent);



/***/ }),

/***/ "./src/app/modules/cadastro/cadastro.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/cadastro/cadastro.module.ts ***!
  \*****************************************************/
/*! exports provided: CadastroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroModule", function() { return CadastroModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro.component */ "./src/app/modules/cadastro/cadastro.component.ts");
/* harmony import */ var src_app_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared-components.module */ "./src/app/components/shared-components.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cadastro-routing.module */ "./src/app/modules/cadastro/cadastro-routing.module.ts");
/* harmony import */ var src_app_service_cadastro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/cadastro.service */ "./src/app/service/cadastro.service.ts");









let CadastroModule = class CadastroModule {
};
CadastroModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["CadastroComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_7__["CadastroRoutingModule"]
        ],
        exports: [_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["CadastroComponent"]],
        providers: [src_app_service_cadastro_service__WEBPACK_IMPORTED_MODULE_8__["CadastroService"]]
    })
], CadastroModule);



/***/ }),

/***/ "./src/app/service/cadastro.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/cadastro.service.ts ***!
  \*********************************************/
/*! exports provided: CadastroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroService", function() { return CadastroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_dto_UserInputDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/dto/UserInputDTO */ "./src/app/models/dto/UserInputDTO.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let CadastroService = class CadastroService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + 'users/';
    }
    cadastrar(cadastroData) {
        const userInputDTO = new _models_dto_UserInputDTO__WEBPACK_IMPORTED_MODULE_3__["UserInputDTO"](cadastroData);
        return this.http
            .post(this.url, userInputDTO);
    }
};
CadastroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CadastroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
], CadastroService);



/***/ })

}]);
//# sourceMappingURL=modules-cadastro-cadastro-module-es2015.js.map