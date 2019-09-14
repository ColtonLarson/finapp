import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinTransactionsComponent } from './fin-transactions.component';

describe('FinTransactionsComponent', () => {
  let component: FinTransactionsComponent;
  let fixture: ComponentFixture<FinTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
