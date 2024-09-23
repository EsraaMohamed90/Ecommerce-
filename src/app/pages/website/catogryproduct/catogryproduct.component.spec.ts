import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogryproductComponent } from './catogryproduct.component';

describe('CatogryproductComponent', () => {
  let component: CatogryproductComponent;
  let fixture: ComponentFixture<CatogryproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatogryproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatogryproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
