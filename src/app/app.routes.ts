import { Routes } from '@angular/router';
import { CsLayoutWithSidebarComponent } from './cs-comp/cs-layout-with-sidebar/cs-layout-with-sidebar.component';
import { CsMainComponent } from './cs-comp/cs-main/cs-main.component';
import { CsFrameComponent } from './cs-comp/cs-frame/cs-frame.component';
import { CsEmptyComponent } from './cs-comp/cs-empty/cs-empty.component';
// ... 其他组件导入略

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: CsMainComponent, data: { breadcrumb: '首页' } }, 
    {
      path: 'introduction',
      component: CsLayoutWithSidebarComponent,
      data: { breadcrumb: '课题组简介' },
      children: [
        { path: '', redirectTo: 'intro', pathMatch: 'full' }, // 👈 默认跳转到 founder
//        { path: 'founder', component: CsFrameComponent, data: { breadcrumb: '创始人',src : 'founder' } },
        { path: 'intro', component: CsFrameComponent, data: { breadcrumb: '课题组概况' } },
        { path: 'direction', component: CsFrameComponent, data: { breadcrumb: '研究方向' } },
        { path: 'projects', component: CsFrameComponent, data: { breadcrumb: '承担项目' } },
//       { path: 'conditions', component: CsFrameComponent, data: { breadcrumb: '研究条件' } }
      ]
    },
    {
      path: 'members',
      data: { breadcrumb: '团队成员' },
      component: CsLayoutWithSidebarComponent,
      children: [
        { path: '', redirectTo: 'teachers', pathMatch: 'full' }, // 👈 默认跳转
        { path: 'teachers', component: CsFrameComponent, data: { breadcrumb: '教师队伍' } },
        { path: 'phd', component: CsFrameComponent, data: { breadcrumb: '博士研究生' } },
        { path: 'master', component: CsFrameComponent, data: { breadcrumb: '硕士研究生' } },
        { path: 'alumni', component: CsFrameComponent, data: { breadcrumb: '毕业生' } }
      ]
    },
    {
      path: 'results',
      data: { breadcrumb: '研究成果' },
      component: CsLayoutWithSidebarComponent,
      children: [
        { path: '', redirectTo: 'papers', pathMatch: 'full' },
        { path: 'papers', component: CsFrameComponent, data: { breadcrumb: '文章' } },
        { path: 'patents', component: CsFrameComponent, data: { breadcrumb: '专利' } },
//        { path: 'software', component: CsFrameComponent, data: { breadcrumb: '软件著作权' } },
        { path: 'honors', component: CsFrameComponent, data: { breadcrumb: '荣誉' } }
      ]
    },
    {
      path: 'construction',
      data: { breadcrumb: '团队建设' },
      component: CsLayoutWithSidebarComponent,
      children: [
        { path: '', redirectTo: 'news', pathMatch: 'full' },
        { path: 'news', component: CsFrameComponent, data: { breadcrumb: '团建活动' } },
//        { path: 'academic', component: CsFrameComponent, data: { breadcrumb: '学术动态' } },
//        { path: 'meetings', component: CsFrameComponent, data: { breadcrumb: '会议通知' } },
//        { path: 'lab-apply', component: CsFrameComponent, data: { breadcrumb: '实验室使用申请' } }
      ]
    },
    {
      path: 'activity',
      data: { breadcrumb: '学术活动' },
      component: CsLayoutWithSidebarComponent,
      children: [
        { path: '', redirectTo: 'meeting', pathMatch: 'full' },
        { path: 'meeting', component: CsFrameComponent, data: { breadcrumb: '会议' } },
//        { path: 'postgraduate', component: CsFrameComponent, data: { breadcrumb: '研究生' } },
//        { path: 'assistant', component: CsFrameComponent, data: { breadcrumb: '本科生实验助理' } }
      ]
    },
    {
      path: 'join',
      data: { breadcrumb: '招生招聘' },
      component: CsLayoutWithSidebarComponent,
      children: [
        { path: '', redirectTo: 'join', pathMatch: 'full' },
        { path: 'join', component: CsFrameComponent, data: { breadcrumb: '招生招聘' } },
//        { path: 'postgraduate', component: CsFrameComponent, data: { breadcrumb: '研究生' } },
//        { path: 'assistant', component: CsFrameComponent, data: { breadcrumb: '本科生实验助理' } }
      ]
    },
    {
      
      path: 'refresh',
      component: CsEmptyComponent, // 创建一个空白组件即可
    
      
    }
  ];
  
