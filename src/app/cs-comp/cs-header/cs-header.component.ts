import { Component,OnInit } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'cs-header',
  standalone: true,
  imports: [NzGridModule,NzMenuModule,NzIconModule],
  templateUrl: './cs-header.component.html',
  styleUrl: './cs-header.component.less'
})
export class CsHeaderComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  goToPage(page:string){
    this.router.navigate([page]);
  }

}
