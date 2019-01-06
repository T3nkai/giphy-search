import {Component, OnInit} from '@angular/core';
import {GiphySearchService} from '../giphy.search.service';
import {Giphy} from './giphy.type';

@Component({
  selector: 'app-giphy-search-manual',
  templateUrl: 'giphy-search-manual.component.html'
})

export class GiphySearchManualComponent implements OnInit {

  gifs: Giphy[] = [];
  limit: string;
  term: string;

  constructor(private giphySearchService: GiphySearchService) {
  }

  ngOnInit() {
  }

  pesquisarGiphy() {
    this.giphySearchService.pesquisarGiphy(this.limit, this.term)
      .subscribe(response =>  this.gifs = response.data);
  }
}

