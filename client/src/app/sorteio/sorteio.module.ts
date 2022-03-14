import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SorteioPageRoutingModule } from './sorteio-routing.module';

import { SorteioPage } from './sorteio.page';

import { SortPipe } from './sort.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SorteioPageRoutingModule,
  ],
  declarations: [
    SortPipe,
    SorteioPage
    ],
  providers: [
    SortPipe
  ], 
})
export class SorteioPageModule {}
