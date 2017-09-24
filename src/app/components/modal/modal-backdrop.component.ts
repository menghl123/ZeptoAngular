import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ModalOptions} from './modal-options.model';

@Component({
  selector: 'zp-modal-backdrop',
  /* tslint:disable */
  template: `<div class="modal-backdrop fade {{modalOptions?.backdropClass || ''}}" 
                  [ngStyle]="{'z-index': 1040 + instanceCount * 10 +1}" [ngClass]="{'show': isOpen}">
             </div>`,
  /* tslint:enable */
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ModalBackdropComponent {
  @Input() isOpen: boolean;
  @Input() modalOptions: ModalOptions;
  @Input() instanceCount = 0;
}
