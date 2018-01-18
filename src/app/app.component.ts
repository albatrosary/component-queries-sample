import {
  Component,
  OnInit,
  AfterContentInit,
  AfterViewInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ContentChild,
  ContentChildren
} from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `<div>This is ViewChild</div>`
})
export class ViewChildComponent implements OnInit {
  ngOnInit() {
    console.log('ViewChildComponent', 'ngOnInit()');
  }
  outline(): string {
    return 'ViewChildComponent.outlint()';
  }
}

@Component({
  selector: 'app-content-child',
  template: `<div>This is ContentChild</div>`
})
export class ContentChildComponent implements OnInit {
  ngOnInit() {
    console.log('ContentChildComponent', 'ngOnInit()');
  }
  outline(): string {
    return 'ContentChildComponent.outlint()';
  }
}

@Component({
  selector: 'app-queries-child',
  template: `
    <app-view-child></app-view-child>
    <app-view-child></app-view-child>
    <ng-content></ng-content>
  `,
  queries: {
    viewChild: new ViewChild(ViewChildComponent),
    viewChildren: new ViewChildren(ViewChildComponent),
    contentChild: new ContentChild(ContentChildComponent),
    contentChildren: new ContentChildren(ContentChildComponent),
  }
})
export class QueryComponent implements OnInit, AfterContentInit, AfterViewInit {
  viewChild: ViewChildComponent;
  viewChildren: QueryList<ViewChildComponent>;
  contentChild: ContentChildComponent;
  contentChildren: QueryList<ContentChildComponent>;

  constructor() {
    console.log('QueryComponent', 'constructor()', 'ViewChild', this.viewChild);
    console.log('QueryComponent', 'constructor()', 'ViewChildren', this.viewChildren);
    console.log('QueryComponent', 'constructor()', 'ContentChild', this.contentChild);
    console.log('QueryComponent', 'constructor()', 'ContentChildren', this.contentChildren);
  }
  
  ngOnInit() {
    console.log('QueryComponent', 'ngOnInit()', 'ViewChild', this.viewChild.outline());
    console.log('QueryComponent', 'ngOnInit()', 'ViewChildren', this.viewChildren);
    console.log('QueryComponent', 'ngOnInit()', 'ContentChild', this.contentChild.outline());
    console.log('QueryComponent', 'ngOnInit()', 'ContentChildren', this.contentChildren);
  }

  ngAfterContentInit() {
    console.log('QueryComponent', 'ngAfterContentInit()', 'ContentChild', this.contentChild);
    console.log('QueryComponent', 'ngAfterContentInit()','ContentChildren', this.contentChildren);
  }

  ngAfterViewInit() {
    console.log('QueryComponent', 'ngAfterViewInit()', 'ViewChild', this.viewChild);
    console.log('QueryComponent', 'ngAfterViewInit()', 'ViewChildren', this.viewChildren);
  }
}

@Component({
  selector: 'app-root',
  template: `
    <app-queries-child>
      <app-content-child></app-content-child>
      <app-content-child></app-content-child>
    </app-queries-child>
  `
})
export class AppComponent { }
