import {Component} from '@angular/core';


@Component({
    selector: 'app-success',
    template: '<div class="alert alert-success">Success</div>',
    styles:[`
    .alert-success {
        color:red;
     }
    `]
})

export class SuccessComponent {
}