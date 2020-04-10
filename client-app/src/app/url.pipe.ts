import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
 name: 'sanitizer'
})

@Injectable()
export class SanitizerPipe implements PipeTransform {

    constructor(private dom: DomSanitizer) {
    }

    transform(value, args) {
        return this.dom.bypassSecurityTrustResourceUrl(value);
    }
}
