import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css'],
})
export class NavLinkComponent implements OnInit {
  @Input() path: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  onNavigate() {
    this.router.navigate([`/`, this.path]);
  }
}
