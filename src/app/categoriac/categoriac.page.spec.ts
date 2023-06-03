import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriacPage } from './categoriac.page';

describe('CategoriacPage', () => {
  let component: CategoriacPage;
  let fixture: ComponentFixture<CategoriacPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
