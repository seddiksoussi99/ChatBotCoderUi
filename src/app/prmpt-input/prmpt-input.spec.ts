import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmptInput } from './prmpt-input';

describe('PrmptInput', () => {
  let component: PrmptInput;
  let fixture: ComponentFixture<PrmptInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrmptInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrmptInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
