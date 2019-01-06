import { NgModule } from '@angular/core';
import {ShareModuleModule} from '../share/share.module';
import {ContatoComponent} from './contato.component';
import {ContatoRoutingModule} from './contato-routing.module';

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    ShareModuleModule,
    ContatoRoutingModule
  ],
  exports: [
    ContatoComponent
  ]
})
export class ContatoModule { }
