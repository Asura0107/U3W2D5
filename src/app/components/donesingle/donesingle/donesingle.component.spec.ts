import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonesingleComponent } from './donesingle.component';

describe('DonesingleComponent', () => {
  let component: DonesingleComponent;
  let fixture: ComponentFixture<DonesingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonesingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonesingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
