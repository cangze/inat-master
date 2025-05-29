import { CommonModule } from "@angular/common";
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from "@angular/router";
import { filter } from "rxjs";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CsCompService } from "../cs-comp.service";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'cs-main',
  standalone: true,
  imports: [RouterModule, CommonModule, NzIconModule, NzGridModule],
  templateUrl: './cs-main.component.html',
  styleUrls: ['./cs-main.component.less']
})
export class CsMainComponent implements OnInit {
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
   
  }

  ngAfterViewChecked() {

  }

  paperList = [
    { title: '2023年发表：XXX研究论文' },
    { title: '2022年发表：YYY核反应建模' },
  ];
  
  patentList = [
    { title: '一种新型核材料检测装置' },
    { title: '高效放射性废物处理方法' },
  ];

  activityList = [
    { title: '参加2024年核能大会' },
    { title: '举办核技术前沿论坛' }
    // ...
  ];
  
  teamList = [
    { title: '2024年春季团建活动' },
    { title: '团队拓展训练' }
    // ...
  ];
  
  
  goToMore(type: 'papers' | 'patents'| 'activities'|'team') {
    console.log('查看更多:', type);
    // 可进行页面跳转等操作
  }
  
  viewItem(item: any) {
    console.log('点击项:', item);
  }
  
  
}
