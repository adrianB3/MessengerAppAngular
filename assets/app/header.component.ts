import {Component, Input} from "@angular/core";
import {Message} from "./messages/message.model";
import {MessageService} from "./messages/message.service";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styles: [`
        .nav {opacity: 0.8}
        .navbar-brand {
            color: #00B7FF;
            font-family: Cambria;
            font-size: 20px;
        }
        
    `]
})
export class HeaderComponent {

}