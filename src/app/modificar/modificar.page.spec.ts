import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarPage } from './modificar.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite';
import { ActivatedRoute } from '@angular/router';

describe('ModificarPage', () => {
  let component: ModificarPage;
  let fixture: ComponentFixture<ModificarPage>;

  const fakeActivatedRoute = {
    snapshot: {data: {}}
  } as ActivatedRoute;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute}, SQLite,],
    });
    fixture = TestBed.createComponent(ModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
