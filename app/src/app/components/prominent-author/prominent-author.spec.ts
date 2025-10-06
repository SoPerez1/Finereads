import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProminentAuthor } from './prominent-author';

describe('ProminentAuthor', () => {
  let component: ProminentAuthor;
  let fixture: ComponentFixture<ProminentAuthor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProminentAuthor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProminentAuthor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
