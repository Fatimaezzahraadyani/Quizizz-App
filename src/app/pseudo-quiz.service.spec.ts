import { TestBed } from '@angular/core/testing';

import { PseudoQuizService } from './pseudo-quiz.service';

describe('PseudoQuizService', () => {
  let service: PseudoQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PseudoQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
