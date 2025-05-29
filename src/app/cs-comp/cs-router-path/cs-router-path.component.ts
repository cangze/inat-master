import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'cs-router-path',
  standalone: true,
  imports: [CommonModule, RouterModule, NzBreadCrumbModule,NzIconModule],
  templateUrl: './cs-router-path.component.html',
  styleUrls: ['./cs-router-path.component.less']
})
export class CsRouterPathComponent implements OnInit {
  ngOnInit(): void {
    // 无需手动设置数据，nzAutoGenerate 会自动根据当前路由 data.breadcrumb 渲染
  }
}
