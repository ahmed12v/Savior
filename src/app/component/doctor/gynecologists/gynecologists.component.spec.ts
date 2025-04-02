import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GynecologistsComponent } from './gynecologists.component';

describe('GynecologistsComponent', () => {
  let component: GynecologistsComponent;
  let fixture: ComponentFixture<GynecologistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GynecologistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GynecologistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
