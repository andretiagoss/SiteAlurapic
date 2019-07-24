import { Component } from '@angular/core';
import { FotoComponent } from './../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from './../foto/foto.service';

//ActivatedRoute: utilizado para capturar dados na url executada.
//router: utilizado para navegar entre paginas.
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent{
    foto: FotoComponent = new FotoComponent(); 
    meuForm : FormGroup;
    service : FotoService;
    route : ActivatedRoute;
    router : Router;
    mensagem : string = '';
    
    // Testes
    // constructor(){
    //     this.foto.titulo = 'A';
    //     this.foto.url = 'B';
    //     this.foto.descricao = 'C';
    // }

    constructor(service: FotoService, fb: FormBuilder, route : ActivatedRoute, router : Router){    
        this.router = router;
        
        this.service = service;

        this.route = route;

        //Captura o parametro ID da URL e se a mesma tiver preenchida, 
        //executa o método buscaPorId de FotoService para atualizar o objeto foto de FotoComponent.
        this.route.params.subscribe(params =>{
            let id = params['id'];

            if(id){
                this.service
                .buscaPorId(id)
                .subscribe(
                    foto => this.foto = foto, 
                    erro => console.log(erro)
                );
            }            
        });

        //Atribui validações para cada propriedade do objeto foto de FotoComponent.
        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });        
    }

    cadastrar(event){
        //o método preventDefault() determina para não executar o evento padrão do submit que é recarregar a pagina.
        event.preventDefault();

        console.log(this.foto);
        
        //usar serviço
        this.service
            .cadastra(this.foto)
            .subscribe(res => {            
                this.mensagem = res.mensagem;                        
                // cria uma nova instancia de FotoComponent, pois como existe o data binding dos atributos da pagina, 
                //o formulário será limpado apos a gravação.
                this.foto = new FotoComponent();

                if(!res.inclusao) this.router.navigate(['']);
            }, erro => console.log(erro));
    }

}