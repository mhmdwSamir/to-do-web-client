import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter();
  @Output() clearConfirm = new EventEmitter();
  constructor(private ele: ElementRef) {
    console.log(ele.nativeElement);
  }

  ngOnInit(): void {
    document.body.appendChild(this.ele.nativeElement);
  }

  ngOnDestroy(): void {
    this.ele.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
  onClearBtnClick() {
    this.clearConfirm.emit();
  }
}
