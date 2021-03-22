import { Component, Input, Output, Optional, Self, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
  selector: 'my-textbox',
  templateUrl: './my-textbox.component.html',
  styleUrls: ['./my-textbox.component.css']
})
export class MyTextboxComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() label = "";
  @Input() value = "";
  @Input() required = false;
  @Output() valueChange = new EventEmitter<string>();

  _onChange(_: any) { }
  _onTouched(_: any) { }

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  updateValue(e: any): void {
    this.value = e.target.value;
    this._onChange(this.value);
    this.valueChange.emit(this.value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
