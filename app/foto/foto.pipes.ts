import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
  name: 'filtroPorTitulo'  
})
//Criação da classe FiltroPorTitulo com a inclusão do contrato (interface) PipeTransform para forçar a existencia do método transform.
//Esse recurso de inclusão de interfaces é do Typescript.
export class FiltroPorTitulo implements PipeTransform {
    transform(fotos : FotoComponent[], digitado : string){
        digitado = digitado.toLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado));
    }
}