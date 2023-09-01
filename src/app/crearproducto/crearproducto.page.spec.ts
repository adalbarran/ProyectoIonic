import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearproductoPage } from './crearproducto.page';

describe('CrearproductoPage', () => {
  let component: CrearproductoPage;
  let fixture: ComponentFixture<CrearproductoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearproductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
