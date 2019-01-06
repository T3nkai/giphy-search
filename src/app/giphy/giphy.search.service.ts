import {Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class GiphySearchService {

  constructor(private http: HttpClient) {
  }
  pesquisarGiphy(limit: string, term: string): Observable<any> {
  const url = this.getUrl(limit, term);
  return this.http.get<any>(url);
  }

  getUrl(limit: string, term: string ) {
    return 'http://api.Giphy.com/v1/gifs/search?q=' + term + '&api_key=ZWcM5FlGUtQCpyh0PXzPl3RpZvKAMSML&limit=' + limit;
  }
}
