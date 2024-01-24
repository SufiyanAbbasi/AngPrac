import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivepracComponent } from './directiveprac.component';

describe('DirectivepracComponent', () => {
  let component: DirectivepracComponent;
  let fixture: ComponentFixture<DirectivepracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivepracComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivepracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
