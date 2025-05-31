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
    { title: 'Nonlinear response correction method for absorption enhancement effects in X-ray fluorescence analysis' },
    { title: 'Measurement of uranium content in resin within adsorption towers in the in-situ leaching uranium process by total reflection X-ray fluorescence' },
    { title: 'Sample Preparation and Determination of Trace Elements in High-Entropy Alloys by Total Reflection X-Ray Fluorescence (TXRF)' },
    { title: 'Source term inversion of short-lived nuclides in complex nuclear accidents based on machine learning using off-site gamma dose rate' },
    { title: 'Mechanism of improving anaerobic fermentation performance of kitchen waste pretreated by ionizing irradiation—part 1: rice' },
    { title: 'A density correction method for radioactive waste drum based on SRGS technology' },
    { title: 'Neutron collimator optimization for 14.1 MeV DT neutrons using Monte Carlo and Genetic algorithms' },
    { title: 'Laser–induced breakdown spectroscopy combined with surface coating to enhance emission line intensity of metallic elements in metal sheet' },
    { title: 'The study of X-ray full-field imaging method for low atomic number elements based on Compton scattering' },
    { title: 'Design and performance evaluation of a large field-of-view dual-particle time-encoded imager based on a depth-of-interaction detector' },
 
 
  ];
  
  patentList = [
    { title: '基于D-D中子源的核燃料棒235U富集度及均匀性检测装置 ' },
    { title: '一种空气比释动能标准剂量场蒙特卡罗模型的建立方法 ' },
    { title: '一种垃圾特征参数在线检测设备及其应用 ' },
    { title: '一种垃圾特征参数在线检测设备 ' },
    { title: '一种多伽马射线能谱探测器 ' },
    { title: '一种基于碲锌镉探测器阵列的中子源位置测量装置及测量方法 ' },
    { title: '一种可组合可控Am-Be中子源装置 ' },
    { title: '一种基于伽马射线能谱探测器的宽能中子剂量当量率仪' },
    { title: '一种基于多伽马射线能谱探测器的中子能谱测量装置 ' },
  ];

  activityList = [
    { title: '我校承办2024科学仪器开发者大会分会场活动' },
    { title: '第二届（2023年）电离辐射计量学术研讨及用户交流会在兰州顺利举办' },
    { title: '首届核分析技术及仪器开发研讨会成功举办' }
    // ...
  ];
  
  teamList = [
    { title: '2024年春季团建活动' },
    { title: '团队拓展训练' }
    // ...
  ];
  
  
  goToMore(type: 'papers' | 'patents'| 'activities'|'team') {
    console.log('查看更多:', type);
    if (type == "papers" || type =="patents"){
      this.router.navigate([`results/${type}`]).then(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    }else if (type == "activities"){
      this.router.navigate([`activity/meeting`]).then(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    }else if (type == "team"){
      this.router.navigate([`construction/news`]).then(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    }
  }
  
  viewItem(item: any) {
    console.log('点击项:', item);

  }
  
}
