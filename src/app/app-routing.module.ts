import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CepComponent } from './components/cep/cep.component';
import { CepListaComponent } from './components/cep-lista/cep-lista.component';

const routes: Routes = [
    { path: '', component: CepComponent },
    { path: 'lista', component: CepListaComponent },
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }