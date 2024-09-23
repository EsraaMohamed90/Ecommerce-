import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogreyComponent } from './catogrey.component';

describe('CatogreyComponent', () => {
  let component: CatogreyComponent;
  let fixture: ComponentFixture<CatogreyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatogreyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatogreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
