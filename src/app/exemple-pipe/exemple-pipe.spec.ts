import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplePipe } from './exemple-pipe';

describe('ExemplePipe', () => {
  let component: ExemplePipe;
  let fixture: ComponentFixture<ExemplePipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemplePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemplePipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
