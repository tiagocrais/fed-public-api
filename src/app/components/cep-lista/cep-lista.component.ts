import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EnderecoResponse } from 'src/app/models/enderecoResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cep-lista',
  templateUrl: './cep-lista.component.html',
  styleUrls: ['./cep-lista.component.css']
})
export class CepListaComponent implements OnInit {

  estado: string = '';
  cidade: string = '';
  logradouro: string = '';
  enderecos: EnderecoResponse[] = [];
  erro: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
  }

  pesquisarEndereco(): void {
    
    if (this.erro || this.enderecos) {
      this.erro = '';
      this.enderecos = [];
    }

    const apiUrl = `/api/consulta/cep/${this.estado}/${this.cidade}/${this.logradouro}`;

    this.http.get(apiUrl)
    .subscribe((data: any) => {
      this.enderecos = data;
    },
    (error) => {
      
      this.erro = error;
    });    
  }

  pesquisarPorCep() {
    
    this.router.navigate(['']);
  }
}
