import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'lte-hightlight',
  template: ``,
  host: {
    '[innerHTML]': 'hightlightHtml',
    'display': 'inline'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HightlightComponent implements OnChanges {
  @Input() value: string;
  @Input() term: string;
  hightlightHtml: string;

  ngOnChanges(): void {
    this.hightlightHtml = this.transform(this.value, this.term);
  }


  transform(value: string, term: string): any {
    return value && term ? this.hightlight(value, term) : value;
  }

  hightlight(value: string, term: string) {
    const termValue = term || '';
    if (termValue.replace) {
      const regExp = new RegExp(termValue.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'gi');
      return value.replace(regExp, function (match) {
        return `<b class="re-hightlight">${match}</b>`;
      });
    }
    return value;
  }
}
