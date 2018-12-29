import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevilFruitComponent } from './devil-fruit.component';
import { DevilFruitService } from './devil-fruit.service';
import { HttpClientModule } from '@angular/common/http';

describe('DevilFruitComponent', () => {
  let component: DevilFruitComponent;
  let fixture: ComponentFixture<DevilFruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DevilFruitComponent],
      providers: [DevilFruitService],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevilFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
