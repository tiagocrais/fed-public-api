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
  exibirMensagemEstado: boolean = false;
  exibirMensagemCidade: boolean = false;
  exibirMensagemLogradouro: boolean = false;
  campoSelecionadoId: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
  }

  campoSelecionado(campoId: string): void {
    
    this.campoSelecionadoId = campoId;
  }
  
  campoDesselecionado(campoId: string): void {
    
    if (this.campoSelecionadoId === campoId) {
      this.campoSelecionadoId = '';
    }
  }

  validarPreenchimento(): void {
    
    if (!this.estado || !this.cidade || !this.logradouro) {
      if (!this.estado) {
        document.getElementById('estado')?.classList.add('campo-invalido');
        this.exibirMensagemEstado = true;
      }
      if (!this.cidade) {
        document.getElementById('cidade')?.classList.add('campo-invalido');
        this.exibirMensagemCidade = true;
      }
      if (!this.logradouro) {
        document.getElementById('logradouro')?.classList.add('campo-invalido');
        this.exibirMensagemLogradouro = true;
      }
      return;
    }
    
    document.getElementById('estado')?.classList.remove('campo-invalido');
    document.getElementById('cidade')?.classList.remove('campo-invalido');
    document.getElementById('logradouro')?.classList.remove('campo-invalido');

    this.consultarEndereco();    
  }

  consultarEndereco() {

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
