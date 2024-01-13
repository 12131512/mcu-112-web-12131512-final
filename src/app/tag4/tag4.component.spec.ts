import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tag4Component } from './tag4.component';

describe('Tag4Component', () => {
  let component: Tag4Component;
  let fixture: ComponentFixture<Tag4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tag4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tag4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
