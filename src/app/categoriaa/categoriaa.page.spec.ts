import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaaPage } from './categoriaa.page';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('CategoriaaPage', () => {
  let component: CategoriaaPage;
  let fixture: ComponentFixture<CategoriaaPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [ HttpClient, SQLite]
    });
    fixture = TestBed.createComponent(CategoriaaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
