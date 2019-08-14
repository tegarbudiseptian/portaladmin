import { NgModule } from '@angular/core';
import { IconLogIn, IconHome, IconXSquare, IconFeather } from 'angular-feather';

const icons = [
  IconLogIn,
  IconHome,
  IconXSquare,
  IconFeather
];

@NgModule({
  imports: icons,
  exports: icons
})
export class FeatherIconsModule { }
