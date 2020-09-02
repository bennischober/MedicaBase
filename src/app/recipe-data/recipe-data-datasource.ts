import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface RecipeDataItem {
  name: string;
  type: number;
  id: number;
  latname: string;
  cnname: string;
  engname: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: RecipeDataItem[] = [
  {id: 1, type: 4, name: 'Rhiz. schwertliliengew.', latname: 'Belamcandae sinensis', cnname: 'SHE GAN', engname: 'Iris domestica'},
  {id: 2, type: 3, name: 'Stachelpanax', latname: 'ACANTHOPANACIS radicis', cnname: 'WU JIA PI', engname: 'CORTEX - efeuart'},
  {id: 3, type: 1, name: 'Aloesaft', latname: 'Aloes Herba', cnname: 'LU HUI', engname: 'Wxtractus Foliorum Herba'},
  {id: 4, type: 2, name: 'Färberwald Wurzel', latname: 'Isatidis', cnname: 'BAN LAN GEN', engname: 'Radix'},
  {id: 5, type: 3, name: 'Ingwergewächs', latname: 'Amomi Villosi Fructus', cnname: 'SHA REN', engname: 'Zingiberaceae'},
];

/**
 * Data source for the RecipeData view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class RecipeDataDataSource extends DataSource<RecipeDataItem> {
  data: RecipeDataItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<RecipeDataItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: RecipeDataItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: RecipeDataItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'type': return compare(+a.type, +b.type, isAsc);
        case 'latname': return compare(a.latname, b.latname, isAsc);
        case 'cnname': return compare(a.cnname, b.cnname, isAsc);
        case 'engname': return compare(a.engname, b.engname, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
