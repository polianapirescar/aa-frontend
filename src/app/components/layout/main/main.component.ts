import { Component } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

declare const $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  ngOnInit(): void {
    $('[data-toggle="tooltip"]').tooltip();
  }

  onResized(event: any) {
    let docHeight = $(window).height();
    let footerHeight = $('#footer').height();
    let footerTop = $('#footer').position().top + footerHeight;
    let marginTop = docHeight - footerTop;

    if (footerTop < docHeight) $('#footer').css('margin-top', marginTop + 'px');
    else $('#footer').css('margin-top', '0px');
  }

}
