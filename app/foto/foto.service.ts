//Http importado para realizar a requisição http no método post. 
//O Headers é utilizado para configurar o cabeçalho da requisição Post, informando que esta enviando para o backend um Json.
import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'; //o Injectable permite que a classe seja injetavel pelo Angular.

@Injectable()
export class FotoService{
    
    http : Http;
    headers : Headers;
    url : string = 'v1/fotos'; 

    constructor(http : Http){
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        
    }

    //método que cadastra uma foto e retorna um  Observable<Response>
    cadastra(foto : FotoComponent) : Observable<MensagemCadastro>{
        if(foto._id){
            
            return this.http
                .put(this.url + '/' + foto._id, JSON.stringify(foto), { headers : this.headers})
                .map(() => new MensagemCadastro('Foto alterada com sucesso', false));

        } else {
            
            return this.http
                .post(this.url, JSON.stringify(foto), { headers : this.headers})
                .map(() => new MensagemCadastro('Foto incluída com sucesso', true))
        }
    }

    //método que lista as fotos e retorna um array de FotoComponent
    lista() : Observable<FotoComponent[]>{
        return this.http
        .get(this.url)
        //o map converte o res (retorno do serviço) para Json
        .map(res => res.json());
    }

    remove(foto : FotoComponent){
        return this.http.delete(this.url + '/' + foto._id);
    }

     buscaPorId(id : string) : Observable<FotoComponent>{
        return this.http
                .get(this.url + '/' + id)                
                .map(res => res.json());
     }
}

export class MensagemCadastro {
    //ao passar o parametro como private, o typescript entende que tem que criar as propriedades automaticamente de forma implicita.
    constructor(private _mensagem : string, private  _inclusao : boolean){
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    get mensagem() : string {
        return this._mensagem;
    }

    get inclusao() : boolean {
        return this._inclusao;
    }
}