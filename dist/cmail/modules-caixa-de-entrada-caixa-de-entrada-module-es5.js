(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-caixa-de-entrada-caixa-de-entrada-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/caixa-de-entrada/caixa-de-entrada.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/caixa-de-entrada/caixa-de-entrada.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\n    <cmail-header></cmail-header>\n    <main class=\"mdl-layout__content\">\n      <div class=\"page-content\">\n        \n        <ul>\n          <li *ngFor=\"let email of listaEmail.reverse()\">\n        <!--  <strong>Para:</strong>{{email.destinatario}}<br>\n              <strong>Assunto:</strong>{{email.assunto}} <br>\n              <strong>conteudo:</strong>{{email.conteudo}} -->\n              <cmail-list-item\n                [destinatario]=\"email.destinatario\"\n                [assunto]=\"email.assunto\"\n                [conteudo]=\"email.conteudo\"\n                [dataDeEnvio]=\"email.dataEnvio\"\n                (eventoVaiRemover)=\"handleDeleteEmail($event, email.id)\"></cmail-list-item>\n          </li>\n        </ul>\n        <div class=\"mdl-grid\">\n          \n  \n          <!-- Floating Multiline Textfield -->\n          <button class=\"globalFab tooltip btn mdl-button mdl-js-button mdl-button--fab mdl-button--colored\" \n            role=\"tooltip\" aria-label=\"Criar novo email\" (click)=\"toogleNewEmailForm()\">\n            <span class=\"material-icons\">add</span>\n          </button>\n  \n          <!-- newEmail--active -->\n          <form \n              #formEmail=\"ngForm\" \n              class=\"newEmail cmailForm\"  \n              [ngClass]=\"{'newEmail--active': isNewEmailFormOpen}\"\n              (ngSubmit)=\"handleNewEmail(formEmail)\">\n            <div class=\"newEmail__card demo-card-wide mdl-card mdl-shadow--2dp\">\n              <div class=\"newEmail__titleArea mdl-card__title\">\n                <h2 class=\"newEmail__title mdl-card__title-text\">Novo Email</h2>\n              </div>\n              <div class=\"newEmail__body mdl-card__supporting-text\">\n                <!-- Form Fields -->\n                <!-- [Para] -->\n                <div class=\"cmailInputForm\">\n                  <div class=\"mdl-textfield mdl-textfield--floating-label\" [ngClass]=\"{'is-invalid': destinatario.invalid && destinatario.touched}\">\n                    <input #destinatario=\"ngModel\" [(ngModel)]=\"email.destinatario\" required type=\"email\" name=\"para\" id=\"para\" placeholder=\" \" class=\"mdl-textfield__input\">\n                    <span class=\"mdl-textfield__error\">Informar um email é obrigatório!</span>\n                    <label class=\"mdl-textfield__label\" for=\"para\">Para: </label>\n                    <span class=\"mdl-textfield__formline\"></span>\n                  </div>\n                </div><!-- ./[Para] -->\n  \n                <!-- [Assunto] -->\n                <div class=\"cmailInputForm\">\n                  <div class=\"mdl-textfield mdl-textfield--floating-label\" [ngClass]=\"{'is-invalid': assunto.invalid && assunto.touched}\">\n                    <input #assunto=\"ngModel\" [(ngModel)]=\"email.assunto\" required type=\"text\" name=\"assunto\" id=\"assunto\" placeholder=\" \" class=\"mdl-textfield__input\">\n                    <span class=\"mdl-textfield__error\">Informar um assunto é obrigatório!</span>\n                    <label class=\"mdl-textfield__label\" for=\"assunto\">Assunto: </label>\n                    <span class=\"mdl-textfield__formline\"></span>\n                  </div>\n                </div><!-- ./[Assunto] -->\n  \n                <!-- [Conteúdo] -->\n                <div class=\"cmailInputForm\">\n                  <div class=\"mdl-textfield mdl-textfield--floating-label\">\n                    <textarea #conteudo=\"ngModel\" [(ngModel)] = \"email.conteudo\" name=\"conteudo\" id=\"conteudo\" placeholder=\" \" class=\"mdl-textfield__input\"></textarea>\n                    <span class=\"mdl-textfield__error\">Informar um conteúdo é obrigatório!</span>\n                    <label class=\"mdl-textfield__label\" for=\"conteudo\">Conteúdo: </label>\n                    <span class=\"mdl-textfield__formline\"></span>\n                  </div>\n                </div><!-- ./[Conteúdo] -->\n  \n                <!-- ./Form Fields -->\n              </div>\n              <div class=\"mdl-card__actions mdl-card--border\">\n                <button class=\"mdl-button\">\n                  Enviar\n                </button>\n              </div>\n              <div class=\"newEmail__topMenu mdl-card__menu\">\n                <button type=\"button\" class=\"mdl-button mdl-button--icon\" (click)=\"toogleNewEmailForm()\">\n                  <span class=\"material-icons\">close</span>\n                </button>\n              </div>\n            </div>\n          </form>\n        </div>\n  \n      </div>\n    </main>\n  </div>\n  "

/***/ }),

/***/ "./src/app/models/Email.ts":
/*!*********************************!*\
  !*** ./src/app/models/Email.ts ***!
  \*********************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
var Email = /** @class */ (function () {
    function Email(_a) {
        var destinatario = _a.destinatario, assunto = _a.assunto, conteudo = _a.conteudo, dataDeEnvio = _a.dataDeEnvio, id = _a.id;
        this.assunto = "";
        this.conteudo = "";
        this.dataEnvio = "";
        this.destinatario = "";
        this.id = "";
        this.remetente = "";
        this.destinatario = destinatario;
        this.assunto = assunto;
        this.conteudo = conteudo;
        this.dataEnvio = dataDeEnvio;
        this.id = id;
    }
    Email.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Email;
}());



/***/ }),

/***/ "./src/app/modules/caixa-de-entrada/caixa-de-entrada-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/caixa-de-entrada/caixa-de-entrada-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CaixaDeEntradaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaixaDeEntradaRoutingModule", function() { return CaixaDeEntradaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _caixa_de_entrada_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caixa-de-entrada.component */ "./src/app/modules/caixa-de-entrada/caixa-de-entrada.component.ts");




var routes = [
    {
        path: '',
        component: _caixa_de_entrada_component__WEBPACK_IMPORTED_MODULE_3__["CaixaDeEntradaComponent"]
    }
];
var CaixaDeEntradaRoutingModule = /** @class */ (function () {
    function CaixaDeEntradaRoutingModule() {
    }
    CaixaDeEntradaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CaixaDeEntradaRoutingModule);
    return CaixaDeEntradaRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/caixa-de-entrada/caixa-de-entrada.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/caixa-de-entrada/caixa-de-entrada.component.ts ***!
  \************************************************************************/
/*! exports provided: CaixaDeEntradaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaixaDeEntradaComponent", function() { return CaixaDeEntradaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/email.service */ "./src/app/service/email.service.ts");



var CaixaDeEntradaComponent = /** @class */ (function () {
    function CaixaDeEntradaComponent(servico) {
        this.servico = servico;
        this.listaEmail = [];
        this.email = { destinatario: '',
            assunto: '',
            conteudo: '' };
        this._isNewEmailFormOpen = false;
    }
    CaixaDeEntradaComponent.prototype.ngOnInit = function () {
        this.listarEmails();
    };
    Object.defineProperty(CaixaDeEntradaComponent.prototype, "isNewEmailFormOpen", {
        get: function () {
            return this._isNewEmailFormOpen;
        },
        enumerable: true,
        configurable: true
    });
    CaixaDeEntradaComponent.prototype.listarEmails = function () {
        var _this = this;
        this.servico.listar()
            .subscribe(function (listaEmailApi) { return _this.listaEmail = listaEmailApi; }, function (erro) { return console.log(erro); });
    };
    CaixaDeEntradaComponent.prototype.toogleNewEmailForm = function () {
        this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
    };
    CaixaDeEntradaComponent.prototype.handleDeleteEmail = function (cliclouNaLixeira, emailId) {
        var _this = this;
        console.log(cliclouNaLixeira);
        console.log(emailId);
        console.log('chamada de apaga email');
        if (cliclouNaLixeira.status === 'removing') {
            console.log('pode apagar');
            this.servico.deletar(emailId)
                .subscribe(function (res) {
                console.log(res);
                _this.listaEmail = _this.listaEmail.filter(function (email) { return email.id != emailId; });
            }, function (err) { return console.error(err); });
        }
    };
    CaixaDeEntradaComponent.prototype.handleNewEmail = function (formEmail) {
        if (formEmail.invalid) {
            formEmail.control.markAllAsTouched();
            return;
        }
        this.servico
            .enviar(this.email)
            .subscribe(function (resposta) {
            console.log('Deu Bom', resposta);
            // this.listaEmail.push({
            //   destinatario: this.email.destinatario,
            //   assunto: this.email.assunto,
            //   conteudo: this.email.conteudo
            // });   
            formEmail.reset();
        }, function (erro) {
            console.log('deu ruim', erro);
        });
    };
    CaixaDeEntradaComponent.ctorParameters = function () { return [
        { type: src_app_service_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"] }
    ]; };
    CaixaDeEntradaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cmail-caixa-de-entrada',
            template: __webpack_require__(/*! raw-loader!./caixa-de-entrada.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/caixa-de-entrada/caixa-de-entrada.component.html")
        })
    ], CaixaDeEntradaComponent);
    return CaixaDeEntradaComponent;
}());



/***/ }),

/***/ "./src/app/modules/caixa-de-entrada/caixa-de-entrada.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/caixa-de-entrada/caixa-de-entrada.module.ts ***!
  \*********************************************************************/
/*! exports provided: CaixaDeEntradaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaixaDeEntradaModule", function() { return CaixaDeEntradaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _caixa_de_entrada_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caixa-de-entrada.component */ "./src/app/modules/caixa-de-entrada/caixa-de-entrada.component.ts");
/* harmony import */ var src_app_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared-components.module */ "./src/app/components/shared-components.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _caixa_de_entrada_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./caixa-de-entrada-routing.module */ "./src/app/modules/caixa-de-entrada/caixa-de-entrada-routing.module.ts");
/* harmony import */ var src_app_service_email_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/email.service */ "./src/app/service/email.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var CaixaDeEntradaModule = /** @class */ (function () {
    function CaixaDeEntradaModule() {
    }
    CaixaDeEntradaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_caixa_de_entrada_component__WEBPACK_IMPORTED_MODULE_3__["CaixaDeEntradaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _caixa_de_entrada_routing_module__WEBPACK_IMPORTED_MODULE_6__["CaixaDeEntradaRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            exports: [_caixa_de_entrada_component__WEBPACK_IMPORTED_MODULE_3__["CaixaDeEntradaComponent"]],
            providers: [src_app_service_email_service__WEBPACK_IMPORTED_MODULE_7__["EmailService"]]
        })
    ], CaixaDeEntradaModule);
    return CaixaDeEntradaModule;
}());



/***/ }),

/***/ "./src/app/service/email.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/email.service.ts ***!
  \******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _models_Email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Email */ "./src/app/models/Email.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var EmailService = /** @class */ (function () {
    function EmailService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + 'emails';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](
            // {'Authorization': localStorage.getItem('cmail-token')}
            { 'Authorization': this.tokenService.obter() })
        };
    }
    EmailService.prototype.enviar = function (email) {
        var emailDTO = {
            to: email.destinatario,
            subject: email.assunto,
            content: email.conteudo
        };
        return this.http.post(this.url, emailDTO, this.httpOptions);
    };
    EmailService.prototype.deletar = function (id) {
        console.log('${id}');
        return this.
            http.
            delete(this.url + '/' + id, { headers: this.httpOptions.headers });
    };
    EmailService.prototype.listar = function () {
        return this.http.get(this.url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (listaEmIngles) {
            return listaEmIngles.map(function (emailIngles) {
                return new _models_Email__WEBPACK_IMPORTED_MODULE_5__["Email"]({
                    destinatario: emailIngles.to,
                    assunto: emailIngles.subject,
                    conteudo: emailIngles.content,
                    dataDeEnvio: emailIngles.created_at,
                    id: emailIngles.id
                });
            });
        }));
    };
    EmailService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
    ]; };
    EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/service/token.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/token.service.ts ***!
  \******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenService = /** @class */ (function () {
    function TokenService() {
        this.tokenKeyName = 'cmail-token';
    }
    TokenService.prototype.gravar = function (token) {
        localStorage.setItem(this.tokenKeyName, token);
    };
    TokenService.prototype.obter = function () {
        return localStorage.getItem(this.tokenKeyName);
    };
    TokenService.prototype.apagar = function () {
        localStorage.removeItem(this.tokenKeyName);
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TokenService);
    return TokenService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-caixa-de-entrada-caixa-de-entrada-module-es5.js.map