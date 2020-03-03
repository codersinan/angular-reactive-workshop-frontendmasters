import { TokenInterceptor } from './token-interceptor';
import { TestBed } from '@angular/core/testing';

describe('TokenInspector', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should create an instance', () => {
    const interceptor: TokenInterceptor = TestBed.get(TokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
