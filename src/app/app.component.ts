import { Component } from '@angular/core';
import { CsHeaderComponent } from './cs-comp/cs-header/cs-header.component';
import { CsFooterComponent } from './cs-comp/cs-footer/cs-footer.component';
import { CsRouterPathComponent } from './cs-comp/cs-router-path/cs-router-path.component';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CsHeaderComponent, CsFooterComponent, CsRouterPathComponent,NzIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'INAT-ui';
}
