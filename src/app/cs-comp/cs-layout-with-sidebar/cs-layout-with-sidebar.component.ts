import { CommonModule } from "@angular/common";
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from "@angular/router";
import { filter } from "rxjs";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CsCompService } from "../cs-comp.service";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'cs-layout-with-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, NzIconModule, NzGridModule],
  templateUrl: './cs-layout-with-sidebar.component.html',
  styleUrls: ['./cs-layout-with-sidebar.component.less']
})
export class CsLayoutWithSidebarComponent implements OnInit {
  menuList: { path: string; label: string }[] = [];
  menuTitle = '';
  baseRouteKey = '';
  currentPath = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private compService: CsCompService,
    private cdr: ChangeDetectorRef // ✅ 注入 ChangeDetectorRef（备用）
  ) {}

  ngOnInit(): void {
    // 初始化基础路由与菜单
    this.baseRouteKey = this.route.snapshot.routeConfig?.path || '';
    this.menuList = this.compService.getMenuConfig(this.baseRouteKey);
    this.menuTitle = this.route.snapshot.data['breadcrumb'] || '';

    // ✅ 使用 setTimeout 避免变更检测错误
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          const segments = this.router.url.split('/');
          this.currentPath = segments[segments.length - 1];
        });
      });
  }

  ngAfterViewChecked() {
    if (this.currentPath === '') {
      const segments = this.router.url.split('/');
      this.currentPath = segments[segments.length - 1];
      this.cdr.detectChanges(); // 安全触发检测
    }
  }

  handleMenuClick(subPath: { path: string; label: string }) {
    const currentUrl = this.router.url;
  
    if (currentUrl.endsWith(subPath.path)) {
      // 当前是相同路径，先导航到一个中间页面（如空路由），再跳回来
      this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
        this.router.navigate([subPath.path], { relativeTo: this.route });
      });
    } else {
      this.router.navigate([subPath.path], { relativeTo: this.route });
    }
  
    console.log(subPath, 'handleMenuClick');
  }
  
}
