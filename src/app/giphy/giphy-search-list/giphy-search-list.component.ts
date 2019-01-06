import {Component, Input, OnInit} from '@angular/core';
import {Giphy} from '../giphy-search-manual/giphy.type';

@Component({
  selector: 'app-giphy-search-list',
  templateUrl: './giphy-search-list.component.html',
  styleUrls: ['./giphy-search-list.component.css']
})
export class GiphySearchListComponent implements OnInit {

  @Input()
  giphysList: Giphy[] = [];
  constructor() { }

  ngOnInit() {
  }

}
