import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriabPage } from './categoriab.page';
import { HttpClient } from '@angular/common/http';

describe('CategoriabPage', () => {
  let component: CategoriabPage;
  let fixture: ComponentFixture<CategoriabPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
    });
    fixture = TestBed.createComponent(CategoriabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
