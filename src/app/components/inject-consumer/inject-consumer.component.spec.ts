import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectConsumerComponent } from './inject-consumer.component';

describe('InjectConsumerComponent', () => {
  let component: InjectConsumerComponent;
  let fixture: ComponentFixture<InjectConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
