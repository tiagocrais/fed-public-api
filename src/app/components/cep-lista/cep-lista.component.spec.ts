import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepListaComponent } from './cep-lista.component';

describe('ListRenderComponent', () => {
  let component: CepListaComponent;
  let fixture: ComponentFixture<CepListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CepListaComponent]
    });
    fixture = TestBed.createComponent(CepListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
