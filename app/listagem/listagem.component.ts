import { PainelComponent } from './../painel/painel.component';
import { Component } from '@angular/core';
import { FotoService } from './../foto/foto.service';
import { FotoComponent } from './../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{
    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem : string = '';

    constructor(service : FotoService){        
        //listando fotos       
        this.service = service;
        this.service
            .lista() 
            //sobrescreve com a declaração da função no formato aero function do typescript.
            .subscribe(fotos => {
                this.fotos = fotos;
                console.log(this.fotos);
            }, erro => console.log(erro));
    }

    remover(foto : FotoComponent, painel : PainelComponent){
        console.log("Chamou remover" + foto);
        this.service
            .remove(foto)
            .subscribe(
                () => {

                    painel.fadeOut(() => {
                        //Obtem o indice da foto removida e a exclui da lista de todos pelo indice. 
                        // let indice = this.fotos.indexOf(foto);
                        // this.fotos.splice(indice,1); //comando splica exclui foto pelo indice                   

                        //procedimento realizado para que o change detection do Angular detecte que o array de fotos foi alterado 
                        //e portanto a view será atualizada com a foto deletada.
                        let novasFotos = this.fotos.slice(0); //slice copia o conteudo de foto para a variavel novasFotos
                        let indice = novasFotos.indexOf(foto);
                        novasFotos.splice(indice,1);
                        this.fotos = novasFotos;
                        this.mensagem = 'Foto removida com sucesso';
                    });                                    
                }, 
                erro => {                     
                    console.log(erro)
                    this.mensagem = 'Não foi possível remover a foto';
                }
            );        
    }
}