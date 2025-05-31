import { Component, OnInit, OnDestroy, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cs-frame',
  standalone: true,
  templateUrl: './cs-frame.component.html',
  styleUrls: ['./cs-frame.component.less']
})
export class CsFrameComponent implements OnInit, OnDestroy {
  src: SafeResourceUrl = '';  // iframe 的源 URL
  currentRoute: string = '';
  parentRoute: string = '';
  iframeHeight = '0px';  // 初始高度
  iframeChanged = false; // 是否已经调整过高度

  @ViewChild('iframeRef') iframeRef!: ElementRef<HTMLIFrameElement>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.currentRoute = this.activatedRoute.snapshot.url.join('/');
    if (this.activatedRoute.parent) {
      this.parentRoute = this.activatedRoute.parent.snapshot.url.join('/');
    }

    const htmlPath = `assets/contents/${this.parentRoute}/${this.currentRoute}.html`;
    console.log(htmlPath, 'sssssssssss');
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(htmlPath);

    // 监听子页面传过来的高度
    window.addEventListener('message', this.handleIframeMessage);
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', this.handleIframeMessage);
    this.iframeChanged = false;
    this.iframeHeight = '0px';
  }

  handleIframeMessage = (event: MessageEvent) => {
    console.log(event.data.iframeHeight, 'event.data.iframeHeight');
    console.log(this.iframeHeight, 'this.iframeHeight');
    // 阻止iframe一直增长高度
    if ((event.data?.iframeHeight && !this.iframeChanged)||(event.data.iframeHeight != parseInt(this.iframeHeight))) {
      this.iframeHeight = `${event.data.iframeHeight+25}px`;
      this.iframeChanged = true
    }
    console.log('iframe src changed');
    // 滚动到顶部
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };


  
}
