import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaePage } from './categoriae.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('CategoriaePage', () => {
  let component: CategoriaePage;
  let fixture: ComponentFixture<CategoriaePage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [ HttpClient, SQLite]
    });
    fixture = TestBed.createComponent(CategoriaePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
