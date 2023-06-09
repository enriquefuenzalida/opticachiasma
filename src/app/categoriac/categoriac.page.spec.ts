import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriacPage } from './categoriac.page';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('CategoriacPage', () => {
  let component: CategoriacPage;
  let fixture: ComponentFixture<CategoriacPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [ HttpClient, SQLite]
    });
    fixture = TestBed.createComponent(CategoriacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
