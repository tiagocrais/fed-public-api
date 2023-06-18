import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EnderecoResponse } from 'src/app/models/enderecoResponse';

interface Endereco {
  cep: string;
  rua: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  ddd: string;
}

@Component({
  selector: 'app-cep-lista',
  templateUrl: './cep-lista.component.html',
  styleUrls: ['./cep-lista.component.css']
})
export class CepListaComponent {

  estado: string = '';
  cidade: string = '';
  logradouro: string = '';
  enderecos: EnderecoResponse[] = [];
  erro: string = '';

  constructor(private http: HttpClient) {}

  pesquisarEndereco(): void {
    
    const apiUrl = `/api/consulta/cep/${this.estado}/${this.cidade}/${this.logradouro}`;

    this.http.get(apiUrl)
    .subscribe((data: any) => {
      this.enderecos = data;
    },
    (error) => {
      
      this.erro = error;
    });    
  }
}
