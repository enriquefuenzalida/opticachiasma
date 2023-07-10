import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriabPage } from './categoriab.page';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('CategoriabPage', () => {
  let component: CategoriabPage;
  let fixture: ComponentFixture<CategoriabPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [ HttpClient, SQLite]
    });
    fixture = TestBed.createComponent(CategoriabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
