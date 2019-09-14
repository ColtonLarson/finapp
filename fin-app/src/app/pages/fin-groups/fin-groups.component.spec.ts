import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinGroupsComponent } from './fin-groups.component';

describe('FinGroupsComponent', () => {
  let component: FinGroupsComponent;
  let fixture: ComponentFixture<FinGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
