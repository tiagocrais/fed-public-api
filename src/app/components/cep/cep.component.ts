import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnderecoResponse } from 'src/app/models/enderecoResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit{

  cep: string = '';
  endereco!: EnderecoResponse;
  cepInvalido: boolean = false;
  erro: string = '';

  constructor(private http: HttpClient, private router: Router) {
   }

  ngOnInit(): void {
  }

  consultarCep(): void {
    
    if (this.erro || this.endereco) {
      this.erro = '';
      this.endereco = new EnderecoResponse("", "", "", "", "", "", "");
    }

    if (this.cep && this.cep.length === 8) {

      const apiUrl = `/api/consulta/cep/${this.cep}`;
      this.http.get(apiUrl).subscribe(
        (data: any) => {
          this.endereco = data;
        },
        (error) => {
          
          this.erro = error;
        }
      );

    this.cepInvalido = false;  
    } else {
      this.cepInvalido = true;
    }

  }

  naoSeiCep() {
    
    this.router.navigate(['/lista']);
  }
}