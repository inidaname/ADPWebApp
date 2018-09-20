import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'format'
})

export class FormatPipe implements PipeTransform {
    transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
        const div = document.createElement('div');
        div.innerHTML = value;
        const text = div.textContent || div.innerText || '';

        if (completeWords) {
            limit = text.substr(0, limit).lastIndexOf(' ');
        }
        return `${text.substr(0, limit)}${ellipsis}`;
    }
}
