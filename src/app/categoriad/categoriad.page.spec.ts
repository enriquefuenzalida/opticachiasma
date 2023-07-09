import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriadPage } from './categoriad.page';
import { HttpClient } from '@angular/common/http';

describe('CategoriadPage', () => {
  let component: CategoriadPage;
  let fixture: ComponentFixture<CategoriadPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
    });
    fixture = TestBed.createComponent(CategoriadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
