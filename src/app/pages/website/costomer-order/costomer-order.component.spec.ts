import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostomerOrderComponent } from './costomer-order.component';

describe('CostomerOrderComponent', () => {
  let component: CostomerOrderComponent;
  let fixture: ComponentFixture<CostomerOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostomerOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostomerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
