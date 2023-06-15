export class EnderecoResponse {
    cep: string;
    rua: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    ddd: string;
  
    constructor(
      cep: string,
      rua: string,
      complemento: string,
      bairro: string,
      cidade: string,
      estado: string,
      ddd: string
    ) {
      this.cep = cep;
      this.rua = rua;
      this.complemento = complemento;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
      this.ddd = ddd;
    }
  }