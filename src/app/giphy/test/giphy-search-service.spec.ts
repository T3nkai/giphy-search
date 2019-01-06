import {GiphySearchService} from '../giphy.search.service';

describe('giphy-search-service.spec.ts', () => {
  const httpMock = jasmine.createSpyObj('http', ['get']);
  let service: GiphySearchService;
  beforeAll(() => {
    service = new GiphySearchService(httpMock);
  });
  // fit('2 deveria ser igual a 2', () => {
  // // entrada
  //   let a = 0;
  //
  //   // proessamento
  //   a = a + 2;
  //   // saida
  //   expect(a).toBe(2);
  // });
  it('pesquisarGiphy', () => {
    service.pesquisarGiphy('10', 'teste');
    expect(httpMock.get).toHaveBeenCalled();
    expect(httpMock.get).toHaveBeenCalledWith(
      'http://api.Giphy.com/v1/gifs/search?q=teste&api_key=ZWcM5FlGUtQCpyh0PXzPl3RpZvKAMSML&limit=10');
  });

  it('getUrl', () => {
    const url = service.getUrl('10', 'teste');

    expect(url)
      .toBe('http://api.Giphy.com/v1/gifs/search?q=teste&api_key=ZWcM5FlGUtQCpyh0PXzPl3RpZvKAMSML&limit=10');
  });


});
