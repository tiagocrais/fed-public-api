import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CepComponent } from './components/cep/cep.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

const routes: Routes = [
    { path: '', component: CepComponent },
    { path: 'list', component: ListRenderComponent },
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }