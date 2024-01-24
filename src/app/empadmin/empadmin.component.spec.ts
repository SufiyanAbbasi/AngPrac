import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpadminComponent } from './empadmin.component';

describe('EmpadminComponent', () => {
  let component: EmpadminComponent;
  let fixture: ComponentFixture<EmpadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
