import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SqliteintentoPage } from './sqliteintento.page';

describe('SqliteintentoPage', () => {
  let component: SqliteintentoPage;
  let fixture: ComponentFixture<SqliteintentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SqliteintentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
