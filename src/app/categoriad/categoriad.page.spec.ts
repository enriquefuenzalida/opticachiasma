import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriadPage } from './categoriad.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('CategoriadPage', () => {
  let component: CategoriadPage;
  let fixture: ComponentFixture<CategoriadPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [ HttpClient, SQLite]
    });
    fixture = TestBed.createComponent(CategoriadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
