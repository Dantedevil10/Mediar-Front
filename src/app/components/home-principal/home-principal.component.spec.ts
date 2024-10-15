import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrincipalComponent } from './home-principal.component';

describe('HomePrincipalComponent', () => {
  let component: HomePrincipalComponent;
  let fixture: ComponentFixture<HomePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
