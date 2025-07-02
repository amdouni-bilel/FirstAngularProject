import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleDirectives } from './exemple-directives';

describe('ExempleDirectives', () => {
  let component: ExempleDirectives;
  let fixture: ComponentFixture<ExempleDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExempleDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExempleDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
