import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenerarPage } from './generar.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('GenerarPage', () => {
  let component: GenerarPage;
  let fixture: ComponentFixture<GenerarPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [ SQLite]
    });
    fixture = TestBed.createComponent(GenerarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
