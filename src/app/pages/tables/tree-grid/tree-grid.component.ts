import { Component, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
}

@Component({
  selector: 'ngx-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
})
export class TreeGridComponent {
  customColumn = 'name';
  allColumns = [ this.customColumn ];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: { name: 'אזור אישי' },
      children: [
        { data: { name: 'col-1' },
      children:[
        {data:{name:'המצב שלי ברשות'}},
        { data: { name: 'פרטי תושב' },
        children:[
          {data:{name:'פרטים אישיים'}},
          {data:{name:'קישורי משפחה'}},
          {data:{name:'פירוט שומה'}},
        ]
        },
          { data: { name: 'מצב חשבון' } ,
        children:[
          {data:{name:'מצב חשבון למשלם'}},
          {data:{name:'מצב חשבון לבעל הנכס'}},
        ]
        },
          { data: { name: 'מים' } ,
        children:[
          {data:{name:'צריכת המים שלי'}}
        ]
        },
      ],
      
      },
      {data:{name:'col-2'},
    children:[
      {data:{name:'שוברי תשלום'},
      children:[
        {data:{name:'הצגת שובר תשלום'}},
        {data:{name:'חיפוש שוברים'}},
      ]
    },
      {data:{name:'חניה'},
      children:[
        {data:{name:'דוחות החניה שלי'}}
      ]},
      {data:{name:'רישוי עסקים'},
      children:[
        {data:{name:'מצב בקשה/רשיון עסק'}},
        {data:{name:'חיפוש בבקשה/רשיון עסק'}},
        {data:{name:'רישוי עסקים'}},
      ]
    },
    ]
    },
    {data:{name:'col-3'},
    children:[
      {data:{name:'קישורים'},
      children:[
        {data:{name:'לאתר עירוני'}},
        {data:{name:'עירונט'}}
      ]
    }
    ]
  },
  {data:{name:'col-4'},
children:[
  {data:{name:'פרטי מנוי'},
  children:[
    {data:{name:'דף נחיתה(ux)'}},
    {data:{name:'תפריט'}},
    {data:{name:'שירותים'}},
    {data:{name:'city4u'}},
    {data:{name:'החלף יישוב'}},
    {data:{name:'איתור תושב'}}
  ]
}
]
}    
      ],
    
    },
    {
      data: { name: 'תשלומים' },
      children: [
        { data: { name: 'col-1' },
        children:[
          {data:{name:'ארנונה'},
          children:[
            {data:{name:'מיסים ומים'}}
          ],
          
        }
        ],
        
      },
        { data: { name: 'col-2' },
        children:[
          {data:{name:'חניה ופיקוח'},
        children:[
          {data:{name:'חנייה התראה'}},
          {data:{name:'חנייה'}}
        ]
        }
        ]
       },
       {data:{name:'col-3'},
      children:[
        {data:{name:'תשלומי מים'}}
      ]
      },
      {data:{name:'col-4'},
      children:[
        {data:{name:'תשלומים נוספים'},
        children:[
          {data:{name:'שלטים'}},
          {data:{name:'פינוי אשפה'}},
          {data:{name:'שונות'}},
          {data:{name:'יתרות חוב'}}
        ]
      }
      ]
    }
      ],
    },
    {
      data:{name:'בקשות ופניות'},
      children:[
        {data:{name:'col-1'},
        children:[
          {data:{name:'מעקב פניות'},
          children:[
            {data:{name:'כל הפניות'}},
            {data:{name:'פניות הממתינות לתגובה'}}
          ]
        }
        ],
      
      },
      {data:{name:'col-2'},
      children:[
        {data:{name:'פניות חדשות'}},
        {data:{name:'גבייה'},
      children:[
        {data:{name:'אישור לטאבו'}},
        {data:{name:'החלפת משלמים'}},
        {data:{name:'השגות וערערים'}},
        {data:{name:'בקשת הנחה'}},
        {data:{name:'בקשה למתן פטור כמוסד מתנדב'}},
        {data:{name:'בקשה להוראת קבע'}},
        {data:{name:'טופס להחזר כספים'}},
        {data:{name:'אישור תושבות'}}
      ]
      },
      {data:{name:'חינוך'},
      children:[
        {data:{name:'עדכון פרטים'}},
        {data:{name:'שינוי כתובת'}},
        {data:{name:'בקשות העברה'}},
        {data:{name:'הנחות'}},
        {data:{name:'רישום לקייטנות'}}
      ]
    }
      ]
    },
    {data:{name:'col-3'},
    children:[
      {data:{name:'רישוי עסקים'},
      children:[
        {data:{name:'טופס בקשות למידע מוקדם'}},
        {data:{name:'טופס פנייה לרשות לקבלת הנחיות להגשת בקשה'}},
        {data:{name:'בקשה לרישוי עסק'}},
        {data:{name:'טופס שינוי בעלות'}},
        {data:{name:'טופס חידוש רשיון'}}
      ]
    },
    {data:{name:'שילוט'},
    children:[
      {data:{name:'טופס קבלת היתר זמני'}},
      {data:{name:'השגה על חיוב'}}
    ]
  },
  {data:{name:'חנייה'},
  children:[
    {data:{name:'טופס ערעור על דוח'}},
    {data:{name:'טופס הזמנת תווי חנייה'}}
  ]
},
{data:{name:'פיקוח'},
  children:[
    {data:{name:'טופס ערעור על דוח פיקוח'}}
  ]
},
{data:{name:'הנדסה'},
  children:[
    {data:{name:'בקשות'}},
    {data:{name:'תבע"ות'}},
    {data:{name:'זימון פגישות'}}
  ]
}
    ]
  }
      ]
    }
   
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }
}
