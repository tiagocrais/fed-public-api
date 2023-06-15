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
    //this.endereco = new EnderecoResponse("", "", "", "", "", "", "");
   }

  ngOnInit(): void {
    console.log("ngOninit");
  }

  consultarCep(): void {
    console.log(`consultarCep cep = ${this.cep}`);
    if (this.cep.length !== 8) {
      console.log('CEP inválido!');
      return;
    }

    const apiUrl = `http://localhost:8080/consulta/cep/${this.cep}`;
    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.endereco = data;
        console.log(`endereco = ${JSON.stringify(this.endereco)}`);
      },
      (error) => {
        console.log('Erro na requisição:', error);
      }
    );
  }
}