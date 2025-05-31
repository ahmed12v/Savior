import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmegencyrequestComponent } from './user-emegencyrequest.component';

describe('UserEmegencyrequestComponent', () => {
  let component: UserEmegencyrequestComponent;
  let fixture: ComponentFixture<UserEmegencyrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEmegencyrequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserEmegencyrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
