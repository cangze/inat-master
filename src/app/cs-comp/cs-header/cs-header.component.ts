import { Component,OnInit } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'cs-header',
  standalone: true,
  imports: [NzGridModule,NzMenuModule,NzIconModule],
  templateUrl: './cs-header.component.html',
  styleUrl: './cs-header.component.less'
})
export class CsHeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    
  }

  goToPage(subPath:string){
    // this.router.navigate([subPath]);
    
    // 如果路径与当前路径相同，刷新当前页面
    const currentUrl = this.router.url;
    const path = subPath;
    if (currentUrl.endsWith(path)) {
      // 当前是相同路径，先导航到一个中间页面（如空路由），再跳回来
      this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
        this.router.navigate([path], { relativeTo: this.route });
      });
    } else {
      this.router.navigate([path], { relativeTo: this.route });
    }
  
    console.log(subPath, 'handleMenuClick');
  }

}
