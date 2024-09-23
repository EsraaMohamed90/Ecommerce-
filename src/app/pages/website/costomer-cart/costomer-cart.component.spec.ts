import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostomerCartComponent } from './costomer-cart.component';

describe('CostomerCartComponent', () => {
  let component: CostomerCartComponent;
  let fixture: ComponentFixture<CostomerCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostomerCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostomerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
