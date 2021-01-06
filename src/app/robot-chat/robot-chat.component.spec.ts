import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotChatComponent } from './robot-chat.component';

describe('RobotChatComponent', () => {
  let component: RobotChatComponent;
  let fixture: ComponentFixture<RobotChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
