import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnderecoResponse } from 'src/app/models/enderecoResponse';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit{

  cep: string = '';
  endereco!: EnderecoResponse;

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
  }

  consultarCep(): void {
    if (this.cep.length !== 8) {
      return;
    }

    const apiUrl = `/api/consulta/cep/${this.cep}`;
    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.endereco = data;
      },
      (error) => {
        //implementar ação
      }
    );
  }
}