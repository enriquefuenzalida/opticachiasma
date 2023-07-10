import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginacuatrocerocuatroPage } from './paginacuatrocerocuatro.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('PaginacuatrocerocuatroPage', () => {
  let component: PaginacuatrocerocuatroPage;
  let fixture: ComponentFixture<PaginacuatrocerocuatroPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [ SQLite]
    });
    fixture = TestBed.createComponent(PaginacuatrocerocuatroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
