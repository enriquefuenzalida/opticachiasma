import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriafPage } from './categoriaf.page';

describe('CategoriafPage', () => {
  let component: CategoriafPage;
  let fixture: ComponentFixture<CategoriafPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
