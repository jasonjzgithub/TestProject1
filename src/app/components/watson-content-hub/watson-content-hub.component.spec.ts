import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatsonContentHubComponent } from './watson-content-hub.component';

describe('WatsonContentHubComponent', () => {
  let component: WatsonContentHubComponent;
  let fixture: ComponentFixture<WatsonContentHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatsonContentHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatsonContentHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
