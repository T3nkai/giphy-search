import {NgModule} from '@angular/core';

import {GiphySearchManualComponent} from './giphy-search-manual.component';
import {GiphySearchService} from '../giphy.search.service';
import {ShareModuleModule} from '../../share/share.module';
import {GiphySearchListModule} from '../giphy-search-list/giphy-search-list.module';
import {GiphySearchManualRoutingModule} from './giphy-search-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [ ShareModuleModule, GiphySearchListModule, GiphySearchManualRoutingModule, HttpClientModule],
  exports: [GiphySearchManualComponent],
  declarations: [GiphySearchManualComponent],
  providers: [GiphySearchService],
})
export class GiphSearchManualModule {
}
