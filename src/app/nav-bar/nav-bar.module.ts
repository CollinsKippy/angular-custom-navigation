import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { NavContactComponent } from './nav-contact/nav-contact.component';
import { NavLogoComponent } from './nav-logo/nav-logo.component';
import { NavContentComponent } from './nav-content/nav-content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    NavBarComponent,
    NavLinkComponent,
    NavContactComponent,
    NavLogoComponent,
    NavContentComponent,
  ],
  exports: [
    NavBarComponent,
    NavLinkComponent,
    NavContactComponent,
    NavLogoComponent,
    NavContentComponent,
  ],
})
export class NavBarModule {}
