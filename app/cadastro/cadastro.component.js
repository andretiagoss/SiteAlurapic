"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var foto_component_1 = require('./../foto/foto.component');
var forms_1 = require('@angular/forms');
var foto_service_1 = require('./../foto/foto.service');
//ActivatedRoute: utilizado para capturar dados na url executada.
//router: utilizado para navegar entre paginas.
var router_1 = require('@angular/router');
var CadastroComponent = (function () {
    // Testes
    // constructor(){
    //     this.foto.titulo = 'A';
    //     this.foto.url = 'B';
    //     this.foto.descricao = 'C';
    // }
    function CadastroComponent(service, fb, route, router) {
        var _this = this;
        this.foto = new foto_component_1.FotoComponent();
        this.mensagem = '';
        this.router = router;
        this.service = service;
        this.route = route;
        //Captura o parametro ID da URL e se a mesma tiver preenchida, 
        //executa o método buscaPorId de FotoService para atualizar o objeto foto de FotoComponent.
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.service
                    .buscaPorId(id)
                    .subscribe(function (foto) { return _this.foto = foto; }, function (erro) { return console.log(erro); });
            }
        });
        //Atribui validações para cada propriedade do objeto foto de FotoComponent.
        this.meuForm = fb.group({
            titulo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            url: ['', forms_1.Validators.required],
            descricao: ['']
        });
    }
    CadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        //o método preventDefault() determina para não executar o evento padrão do submit que é recarregar a pagina.
        event.preventDefault();
        console.log(this.foto);
        //usar serviço
        this.service
            .cadastra(this.foto)
            .subscribe(function (res) {
            _this.mensagem = res.mensagem;
            // cria uma nova instancia de FotoComponent, pois como existe o data binding dos atributos da pagina, 
            //o formulário será limpado apos a gravação.
            _this.foto = new foto_component_1.FotoComponent();
            if (!res.inclusao)
                _this.router.navigate(['']);
        }, function (erro) { return console.log(erro); });
    };
    CadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro',
            templateUrl: './cadastro.component.html'
        }), 
        __metadata('design:paramtypes', [foto_service_1.FotoService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map