(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/login/login.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/login/login.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout\">    \n<main class=\"mdl-layout__content\">\n<div class=\"page-content\">\n    \n  <div class=\"mdl-grid\">\n    <article class=\"demo-card-wide mdl-card mdl-shadow--2dp\">\n      <header class=\"mdl-card__title\">\n        <h1 class=\"mdl-card__title-text\">Bem vindos/as ao CMail!</h1>\n      </header>\n      <p *ngIf=\"mensagem\">\n        {{mensagem}}\n        </p>\n      <form [formGroup]=\"formLogin\" (ngSubmit)=\"handleLogin()\" autocomplete=\"off\" class=\"mdl-card__supporting-text\">\n\n        <!-- aqui os campos do formulário -->\n        <cmail-form-group idCampo = \"email\" textoDaLabel = \"Email\" [isInvalid]=\"email.invalid && email.touched\">\n          <input formControlName=\"email\" required type=\"email\" name=\"email\" cmailFormField required autofocus>\n          <span class=\"mdl-textfield__error\" *ngIf=\"email.invalid\">Informar um email é obrigatorio</span>\n        </cmail-form-group>\n    \n        <cmail-form-group idCampo = \"password\" textoDaLabel = \"Password\" [isInvalid]=\"password.invalid && password.touched\">\n            <input formControlName=\"password\" required type=\"password\" name=\"password\" cmailFormField required autofocus>\n            <span class=\"mdl-textfield__error\" *ngIf=\"email.invalid\">Informar uma senha é obrigatorio!</span>\n        </cmail-form-group>    \n\n        <div class=\"mdl-card__actions mdl-card--border\">\n          <a routerLink=\"/cadastro\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\n            Primeiro login? Cadastre-se!\n          </a>\n          <button type=\"submit\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--accent entrar\">\n            Entrar\n          </button>\n        </div>\n      </form>\n\n    </article>\n  </div>\n</div>\n</main>\n</div>\n"

/***/ }),

/***/ "./src/app/models/dto/LoginInputDTO.ts":
/*!*********************************************!*\
  !*** ./src/app/models/dto/LoginInputDTO.ts ***!
  \*********************************************/
/*! exports provided: LoginInputDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInputDTO", function() { return LoginInputDTO; });
class LoginInputDTO {
    constructor({ email, password }) {
        this.email = "";
        this.password = "";
        this.email = email;
        this.password = password;
    }
}
LoginInputDTO.ctorParameters = () => [
    null
];


/***/ }),

/***/ "./src/app/modules/login/login-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/login/login-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/modules/login/login.component.ts");




const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/modules/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/modules/login/login.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdl-layout {\n  background: linear-gradient(to bottom, #fcfff4 0%,#e9e9ce 100%); \n}\n\n.page-content, .mdl-grid {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.mdl-shadow--2dp {\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), \n  0 3px 1px -2px rgba(0,0,0,.2), \n  0 1px 5px 0 rgba(0,0,0,.12),\n  10px 40px 90px 10px rgba(0,0,0,.5);\n}\n\n.mdl-grid {\n  align-content: center;\n  justify-content: center;\n}\n\n.demo-card-wide.mdl-card {\n  width: 512px;\n}\n\n.demo-card-wide>.mdl-card__title {\n  color: #fff;\n  height: 176px;\n  background: url('http://creativeloads.com/foto/vector-triangle-background-215.jpg') center / cover;\n}\n\n.demo-card-wide>.mdl-card__menu {\n  color: #fff;\n}\n\n.mdl-card__actions {\n  margin-top: 25px;\n}\n\n.mdl-button.entrar {\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFOzs7b0NBR2tDO0FBQ3BDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0dBQWtHO0FBQ3BHOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kbC1sYXlvdXQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmNmZmY0IDAlLCNlOWU5Y2UgMTAwJSk7IFxufVxuXG4ucGFnZS1jb250ZW50LCAubWRsLWdyaWQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZGwtc2hhZG93LS0yZHAge1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIFxuICAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgXG4gIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKSxcbiAgMTBweCA0MHB4IDkwcHggMTBweCByZ2JhKDAsMCwwLC41KTtcbn1cblxuLm1kbC1ncmlkIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRlbW8tY2FyZC13aWRlLm1kbC1jYXJkIHtcbiAgd2lkdGg6IDUxMnB4O1xufVxuXG4uZGVtby1jYXJkLXdpZGU+Lm1kbC1jYXJkX190aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDE3NnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHA6Ly9jcmVhdGl2ZWxvYWRzLmNvbS9mb3RvL3ZlY3Rvci10cmlhbmdsZS1iYWNrZ3JvdW5kLTIxNS5qcGcnKSBjZW50ZXIgLyBjb3Zlcjtcbn1cblxuLmRlbW8tY2FyZC13aWRlPi5tZGwtY2FyZF9fbWVudSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWRsLWNhcmRfX2FjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubWRsLWJ1dHRvbi5lbnRyYXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_dto_LoginInputDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/dto/LoginInputDTO */ "./src/app/models/dto/LoginInputDTO.ts");
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/login.service */ "./src/app/service/login.service.ts");






let LoginComponent = class LoginComponent {
    constructor(service, roteador) {
        this.service = service;
        this.roteador = roteador;
        this.validadorEmail = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.validadoresPassword = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            //Validators.minLength(6),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)
        ]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.validadorEmail);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', this.validadoresPassword);
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: this.email,
            password: this.password
        });
        this.mensagem = '';
    }
    ngOnInit() {
    }
    handleLogin() {
        if (this.formLogin.valid) {
            const loginDTO = new src_app_models_dto_LoginInputDTO__WEBPACK_IMPORTED_MODULE_4__["LoginInputDTO"](this.formLogin.value);
            console.log(loginDTO);
            //  this.httpRequest
            //    .post('http://localhost:3200/login', loginDTO)
            this.service.autenticar(this.formLogin.value)
                .subscribe((response) => {
                console.log(response);
                console.log('deu certo');
                this.roteador.navigate(['']);
            }, (erro) => {
                this.mensagem = erro.error;
                console.error(erro);
                console.log('deu ruim');
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_service_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cmail-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/modules/login/login.component.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/modules/login/login-routing.module.ts");
/* harmony import */ var src_app_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/shared-components.module */ "./src/app/components/shared-components.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_service_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/login.service */ "./src/app/service/login.service.ts");









let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"]
        ],
        exports: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        providers: [src_app_service_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/service/login.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + 'login/';
    }
    autenticar(loginData) {
        const loginDTO = {
            email: loginData.email,
            password: loginData.senha
        };
        return this.http
            .post(this.url, loginData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((resposta) => {
            localStorage.setItem('cmail-token', resposta.token);
            return {
                avatarUrl: resposta.avatarUrl,
                email: resposta.email,
                name: resposta.name
            };
        }));
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], LoginService);



/***/ })

}]);
//# sourceMappingURL=modules-login-login-module-es2015.js.map