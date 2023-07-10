import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExternapidosPage } from './externapidos.page';

describe('ExternapidosPage', () => {
  let component: ExternapidosPage;
  let fixture: ComponentFixture<ExternapidosPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(ExternapidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
