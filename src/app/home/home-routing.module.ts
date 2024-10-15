import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from '../listagem/listagem.component';
import { DescricaoComponent } from '../descricao/descricao.component';

const routes: Routes = [
  {
    path: 'home/detalhes/:id',
    component: DescricaoComponent,
  },
  {
    path: '',
    component: ListagemComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
