import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriadPage } from './categoriad.page';

describe('CategoriadPage', () => {
  let component: CategoriadPage;
  let fixture: ComponentFixture<CategoriadPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(CategoriadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
