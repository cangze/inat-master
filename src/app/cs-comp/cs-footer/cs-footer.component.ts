import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'cs-footer',
  standalone: true,
  imports: [NzDividerModule],
  templateUrl: './cs-footer.component.html',
  styleUrl: './cs-footer.component.less'
})
export class CsFooterComponent {
  var_email:string = 'inat@inat.com'
}
