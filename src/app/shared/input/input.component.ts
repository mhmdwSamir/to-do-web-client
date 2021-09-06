import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() inputType!: string;
  @Input() label!: String;
  constructor() {}

  ngOnInit(): void {}

  showError() {
    const { errors, touched, dirty } = this.control;
    return errors && touched && dirty;
  }
}
