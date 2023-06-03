import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaePage } from './categoriae.page';

describe('CategoriaePage', () => {
  let component: CategoriaePage;
  let fixture: ComponentFixture<CategoriaePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriaePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
