import { Component, InjectionToken, OnInit } from '@angular/core';

interface Logger {
  log: (val: string) => void;
}

const LOGGER_TOKEN = new InjectionToken<Logger>('MyLoggerToken', {
  providedIn: 'root',
  factory: () => {
    return {
      log: (val: string): void => console.log(val),
    };
  },
});

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
