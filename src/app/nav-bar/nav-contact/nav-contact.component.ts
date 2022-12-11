import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-contact',
  templateUrl: './nav-contact.component.html',
  styleUrls: ['./nav-contact.component.css'],
})
export class NavContactComponent implements OnInit {
  @Input() path: string;
  constructor(private router: Router) {}

  ngOnInit() {}

  onNavigate() {
    this.router.navigate([`/`, this.path]);
  }
}
