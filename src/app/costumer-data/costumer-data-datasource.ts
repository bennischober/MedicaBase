import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface CostumerDataItem {
  name: string;
  id: number;
  surname: string;
  city: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: CostumerDataItem[] = [
  {id: 1, name: 'Hydrogenaaaaaaaaaa', surname: 'Uranaaaaaaaaaaa', city: 'KDJFÖSDFJDFÖSDJFJDSÖFJSDJÖJDSÖFJÖ'},
  {id: 2, name: 'Helium', surname: '', city: ''},
  {id: 3, name: 'Lithium', surname: '', city: ''},
  {id: 4, name: 'Beryllium', surname: '', city: ''},
  {id: 5, name: 'Boron', surname: '', city: ''},
  {id: 6, name: 'Carbon', surname: '', city: ''},
  {id: 7, name: 'Nitrogen', surname: '', city: ''},
  {id: 8, name: 'Oxygen', surname: '', city: ''},
  {id: 9, name: 'Fluorine', surname: '', city: ''},
  {id: 10, name: 'Neon', surname: '', city: ''},
  {id: 11, name: 'Sodium', surname: '', city: ''},
  {id: 12, name: 'Magnesium', surname: '', city: ''},
  {id: 13, name: 'Aluminum', surname: '', city: ''},
  {id: 14, name: 'Silicon', surname: '', city: ''},
  {id: 15, name: 'Phosphorus', surname: '', city: ''},
  {id: 16, name: 'Sulfur', surname: '', city: ''},
  {id: 17, name: 'Chlorine', surname: '', city: ''},
  {id: 18, name: 'Argon', surname: '', city: ''},
  {id: 19, name: 'Potassium', surname: '', city: ''},
  {id: 20, name: 'Calcium', surname: '', city: ''},
];

/**
 * Data source for the CostumerData view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CostumerDataDataSource extends DataSource<CostumerDataItem> {
  data: CostumerDataItem[] = EXAMPLE_DATA;
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
  connect(): Observable<CostumerDataItem[]> {
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
  private getPagedData(data: CostumerDataItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: CostumerDataItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'surname': return compare(a.surname, b.surname, isAsc);
        case 'city': return compare(a.city, b.city, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
