/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserContextService } from './user-context.service';

describe('Service: UserContext', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserContextService]
    });
  });

  it('should ...', inject([UserContextService], (service: UserContextService) => {
    expect(service).toBeTruthy();
  }));
});
