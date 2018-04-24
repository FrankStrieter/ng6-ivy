import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-card',
  template: `
    <p>
     {{test}}
    </p>
  `,
  styles: [],
})
export class CardComponent implements OnInit {
  @Input() test: string;
  constructor() {}

  ngOnInit() {}
}
