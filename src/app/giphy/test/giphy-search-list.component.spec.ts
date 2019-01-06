import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GiphySearchListComponent} from '../giphy-search-list/giphy-search-list.component';
import {ShareModuleModule} from '../../share/share.module';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('', () => {
  let fixture: ComponentFixture<GiphySearchListComponent>;
  let giphyComponent: GiphySearchListComponent;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [GiphySearchListComponent],
      imports: [ShareModuleModule],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(GiphySearchListComponent);
      giphyComponent = fixture.componentInstance;
      fixture.detectChanges();
    });
  });
  it('deveria ter criado o component', () => {
    expect(GiphySearchListComponent).toBeTruthy();
    expect(GiphySearchListComponent).not.toBeNull();
  });

  it('', () => {
    giphyComponent.giphysList = [
      {
        id: '1',
        url: 'localhost',
        images: {fixed_height: {url: 'localhost/gif.1'}}
      },
      {
        id: '1',
        url: 'localhost:8080',
        images: {fixed_height: {url: 'localhost/gif.2'}}
      }];
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const debugElemento: DebugElement[] = fixture.debugElement.queryAll(By.css('a'));
      expect(debugElemento.length).toBe(2);
    });
  });
});
