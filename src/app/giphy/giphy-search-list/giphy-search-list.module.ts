import { NgModule } from '@angular/core';
import {GiphySearchListComponent} from './giphy-search-list.component';
import {ShareModuleModule} from '../../share/share.module';

@NgModule({
  declarations: [GiphySearchListComponent],
  imports: [
    ShareModuleModule
  ],
  exports: [
    GiphySearchListComponent
  ]
})
export class GiphySearchListModule { }
