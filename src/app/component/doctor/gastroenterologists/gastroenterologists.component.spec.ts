import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastroenterologistsComponent } from './gastroenterologists.component';

describe('GastroenterologistsComponent', () => {
  let component: GastroenterologistsComponent;
  let fixture: ComponentFixture<GastroenterologistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastroenterologistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GastroenterologistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
