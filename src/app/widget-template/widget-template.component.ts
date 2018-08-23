import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-template',
  templateUrl: './widget-template.component.html',
  styleUrls: ['./widget-template.component.css']
})
export class WidgetTemplateComponent implements OnInit {
  public now: Date = new Date();

  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  ngOnInit() {
  }

}
