import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FotoshotPage } from './fotoshot.page';

describe('FotoshotPage', () => {
  let component: FotoshotPage;
  let fixture: ComponentFixture<FotoshotPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FotoshotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
