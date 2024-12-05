import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDirectivesComponent } from './demo-directives.component';

describe('DemoDirectivesComponent', () => {
  let component: DemoDirectivesComponent;
  let fixture: ComponentFixture<DemoDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoDirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
