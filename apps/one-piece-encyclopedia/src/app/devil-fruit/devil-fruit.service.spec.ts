import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { DevilFruitService } from './devil-fruit.service';

describe('DevilFruitService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: DevilFruitService = TestBed.get(DevilFruitService);
    expect(service).toBeTruthy();
  });
});
