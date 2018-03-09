import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  private PAGE_MENUS: any;
  constructor() {
    this.PAGE_MENUS = [{
      path: 'home',
      data: {
        menu: {
          title: 'Home'
        }
      },
      children: [
        {
          path: 'guidance',
          data: {
            menu: {
              title: 'Guidance',
              icon: '',
              selected: false,
              expanded: false,
              order: 0
            }
          },
        },
        {
          path: 'article',
          data: {
            menu: {
              title: 'Manage Article',
              icon: '',
              selected: false,
              expanded: false,
              order: 0
            }
          },
          children: [
            {
              path: 'sub1',
              data: {
                menu: {
                  title: 'sub 1',
                  icon: '',
                  selected: false,
                  expanded: false,
                  order: 0
                }
              }
            },
            {
              path: 'sub2',
              data: {
                menu: {
                  title: 'sub 2',
                  icon: '',
                  selected: false,
                  expanded: false,
                  order: 0
                }
              }
            }
          ]
        }
      ]}
    ];
  }

  ngOnInit() {
    // this._navMenuService.displayMenuByRoutes(this.PAGE_MENUS);
  }

}
