import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocReequestComponent } from './doc-reequest.component';

describe('DocReequestComponent', () => {
  let component: DocReequestComponent;
  let fixture: ComponentFixture<DocReequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocReequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocReequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
