import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCurrentUserComponent } from './show-current-user.component';

describe('ShowCurrentUserComponent', () => {
  let component: ShowCurrentUserComponent;
  let fixture: ComponentFixture<ShowCurrentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCurrentUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCurrentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
