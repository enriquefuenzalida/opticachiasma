import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriafPage } from './categoriaf.page';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('CategoriafPage', () => {
  let component: CategoriafPage;
  let fixture: ComponentFixture<CategoriafPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [ HttpClient, SQLite]
    });
    fixture = TestBed.createComponent(CategoriafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
