import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SqliteintentoPage } from './sqliteintento.page';
import { HttpClient } from '@angular/common/http';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('SqliteintentoPage', () => {
  let component: SqliteintentoPage;
  let fixture: ComponentFixture<SqliteintentoPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpClient, SQLite],
    });
    fixture = TestBed.createComponent(SqliteintentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
