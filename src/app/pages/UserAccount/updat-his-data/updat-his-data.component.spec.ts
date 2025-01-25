import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatHisDataComponent } from './updat-his-data.component';

describe('UpdatHisDataComponent', () => {
  let component: UpdatHisDataComponent;
  let fixture: ComponentFixture<UpdatHisDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatHisDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatHisDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
