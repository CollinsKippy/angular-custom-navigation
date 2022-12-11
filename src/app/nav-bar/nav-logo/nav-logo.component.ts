import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-logo',
  templateUrl: './nav-logo.component.html',
  styleUrls: ['./nav-logo.component.css'],
})
export class NavLogoComponent implements OnInit {
  @Input() path: string;
  constructor(private router: Router) {}

  ngOnInit() {}

  onNavigate() {
    this.router.navigate([`/`, this.path]);
  }
}
