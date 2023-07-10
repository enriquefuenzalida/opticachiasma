import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExternapiPage } from './externapi.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
/**/
describe('ExternapiPage', () => {
  let component: ExternapiPage;
  let fixture: ComponentFixture<ExternapiPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [ HttpClient],
    });
    fixture = TestBed.createComponent(ExternapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
