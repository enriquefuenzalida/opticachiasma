import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExternapiPage } from './externapi.page';

describe('ExternapiPage', () => {
  let component: ExternapiPage;
  let fixture: ComponentFixture<ExternapiPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(ExternapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
