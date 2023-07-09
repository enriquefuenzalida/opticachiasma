import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaaPage } from './categoriaa.page';
import { HttpClient } from '@angular/common/http';

describe('CategoriaaPage', () => {
  let component: CategoriaaPage;
  let fixture: ComponentFixture<CategoriaaPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
    });
    fixture = TestBed.createComponent(CategoriaaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
