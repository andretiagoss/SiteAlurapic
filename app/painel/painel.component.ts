import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit{
    
    @Input() titulo: string;
    elemento : ElementRef;

    constructor(elemento : ElementRef){
        this.elemento = elemento;
    }

    //O método ngOnInit é chamado apos as inbounds property serem preenchidas. Faz parte do ciclo de vidas dos componentes do Angular
    ngOnInit(){
        this.titulo = this.titulo.length > 7 ? this.titulo.substring(0,7) + '...' : this.titulo; 
    }

    fadeOut(cb){
        //é necessário instalar o jquery dentro do typings do Angular para que o typescript possa reconhecer os comandos do jquery.
        //A instalação ocorre via terminal com os seguintes comandos:
        //1 - npm run typings search jquery
        //2 - node ./node_modules/typings/dist/bin
        //3 - node ./node_modules/typings/dist/bin install dt~jquery --global --save
        $(this.elemento.nativeElement).fadeOut(cb);
    }
}