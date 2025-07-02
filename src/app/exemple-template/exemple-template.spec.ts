import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleTemplate } from './exemple-template';

describe('ExempleTemplate', () => {
  let component: ExempleTemplate;
  let fixture: ComponentFixture<ExempleTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExempleTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExempleTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
