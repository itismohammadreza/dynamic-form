import { Component, Input, OnInit } from '@angular/core';
import { NgColor } from '@form-builder/models/button';
import { NgButtonAppearance, NgButtonType } from '@form-builder/models/button';

@Component({
  selector: 'ng-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() appearance: NgButtonAppearance;
  @Input() type: NgButtonType = 'button';
  @Input() color: NgColor = 'primary';

  constructor() {
  }

  ngOnInit(): void {
  }
}
