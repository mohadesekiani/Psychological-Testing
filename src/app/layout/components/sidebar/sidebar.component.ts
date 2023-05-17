import { Component, Input, ViewChild } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav: MatSidenavModule;
  @Input() isExpanded :boolean;
  showSubmenu: boolean = false;
 isShowing = false;
  showSubSubMenu: boolean = false;

}