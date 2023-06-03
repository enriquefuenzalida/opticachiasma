import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaaPage } from './categoriaa.page';

describe('CategoriaaPage', () => {
  let component: CategoriaaPage;
  let fixture: ComponentFixture<CategoriaaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriaaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
