import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExternapidosPage } from './externapidos.page';
import { HttpClient } from '@angular/common/http';

describe('ExternapidosPage', () => {
  let component: ExternapidosPage;
  let fixture: ComponentFixture<ExternapidosPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpClient],
    });
    fixture = TestBed.createComponent(ExternapidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
