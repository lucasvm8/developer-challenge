import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SorteioPage } from './sorteio.page';

const routes: Routes = [
  {
    path: '',
    component: SorteioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SorteioPageRoutingModule {}
