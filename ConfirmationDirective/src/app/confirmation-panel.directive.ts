import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmationPanel]'
})
export class ConfirmationPanelDirective {

  @Input('confirm') execFunction! : Function;

  @HostListener('click', ['$event'])
  onClick(){
    const confirmed = window.confirm('¿Estás seguro de querer guardar?');

    if (confirmed) {
      this.execFunction();
    }
  }

}
