import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriafPage } from './categoriaf.page';
import { HttpClient } from '@angular/common/http';

describe('CategoriafPage', () => {
  let component: CategoriafPage;
  let fixture: ComponentFixture<CategoriafPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
    });
    fixture = TestBed.createComponent(CategoriafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
