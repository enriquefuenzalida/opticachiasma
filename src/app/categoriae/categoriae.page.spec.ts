import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaePage } from './categoriae.page';
import { HttpClient } from '@angular/common/http';

describe('CategoriaePage', () => {
  let component: CategoriaePage;
  let fixture: ComponentFixture<CategoriaePage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
    });
    fixture = TestBed.createComponent(CategoriaePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
