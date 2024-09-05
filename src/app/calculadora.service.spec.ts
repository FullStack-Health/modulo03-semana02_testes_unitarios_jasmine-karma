import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve lançar um erro ao tentar dividir por zero (usando o toThrow)', () => {
    expect(() => service.dividir(10,0)).toThrow();
  });

  it('deve lançar um erro ao tentar dividir por zero (usando o toThrowError)', () => {
    expect(() => service.dividir(10,0)).toThrowError('Não é permitida a divisão por zero');
  });

  it('deve lançar um erro ao tentar dividir por zero (usando o toThrowError)', () => {
    expect(() => { throw new Error('Numero dividido por zero') }).toThrowError('Numero dividido por zero');
  });
});
