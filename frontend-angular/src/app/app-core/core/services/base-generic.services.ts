import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseGenericSimpleService } from './base-generic.simple.services';
import { Filters, ItemSort } from '../objects/filter.object';

export class BaseGenericService<T> extends BaseGenericSimpleService {
  constructor(
    override readonly http: HttpClient,
    override readonly api: string,
    override readonly urlBaseAPI = ''
  ) {
    super(http, api, urlBaseAPI);
  }

  public validFilters(filters: Filters): boolean {
    return filters && (filters.filters?.length > 0 || filters.sorts?.length > 1);
  }

  public validParamArray(page: number, numberRecord: number, sort: ItemSort): any[] {
    var arrParameterList = new Array();

    if (page && page > 0) {
      arrParameterList.push(`page=${page}`);
    }

    if (numberRecord && numberRecord > 0) {
      arrParameterList.push(`numberRecords=${numberRecord}`);
    }

    if (sort?.name && sort?.direction && sort?.name !== '' && sort?.direction !== '') {
      arrParameterList.push(`orderBy=${sort?.name}`);
      arrParameterList.push(`direcOrder=${sort?.direction}`);
    }

    return arrParameterList;
  }

  getPagedOrderedFilterSort(
    page: number,
    sort: ItemSort,
    numberRecord = 0,
    filters: Filters
  ): Observable<Object> {
    return this.getPagedOrderedFilter(
      page,
      sort?.name,
      sort?.direction,
      numberRecord,
      filters
    );
  }

  getPagedOrderedFilter(
    page: number,
    column: string,
    direction: string,
    numberRecord = 0,
    filters: Filters
  ): Observable<Object> {
    var arrParameterList = new Array();
    if (page && page > 0) {
      arrParameterList.push(`page=${page}`);
    }

    if (numberRecord && numberRecord > 0) {
      arrParameterList.push(`numberRecords=${numberRecord}`);
    }

    if (column && direction && column !== '' && direction !== '') {
      arrParameterList.push(`orderBy=${column}`);
      arrParameterList.push(`direcOrder=${direction}`);
    }

    if (this.validFilters(filters)) {
      return this.http.post(
        `${this.baseAPI}/GetRecordsOrderPagedFilter${arrParameterList.length > 0 ? '?' + arrParameterList.join('&') : ''
        }`,
        filters
      );
    } else {
      return this.http.get(
        `${this.baseAPI}/GetRecordsOrderPagedFilter${arrParameterList.length > 0 ? '?' + arrParameterList.join('&') : ''
        }`,
        {
          headers: this.refreshData(),
        }
      );
    }
  }

  update(ObjEntidad: T) {
    return this.put(ObjEntidad);
  }

  create(ObjEntidad: T) {
    return this.post(ObjEntidad);
  }

  getFileExterno(externo: string, method: string) {
    return this.http.get(`${this.baseExternalAPI + externo}/${method}`, {
      reportProgress: true,
      responseType: 'blob',
      observe: 'response',
    });
  }

  getFile(method: string) {
    return this.http.get(`${this.baseAPI}/${method}`, {
      reportProgress: true,
      responseType: 'blob',
      observe: 'response',
    });
  }

  postFileExterno<TValue>(externo: string, method: string, ObjEntidad: TValue) {
    return this.http.post(
      `${this.baseExternalAPI + externo}/${method}`,
      JSON.stringify(ObjEntidad),
      {
        reportProgress: true,
        responseType: 'blob',
        observe: 'response',
      }
    );
  }

  postDownloads<TValue>(method: string, ObjEntidad: TValue) {
    return this.http.post(`${this.baseAPI}/${method}`, ObjEntidad, {
      reportProgress: true,
      responseType: 'blob',
      observe: 'response',
    });
  }

  postFile<TValue>(method: string, ObjEntidad: TValue) {
    return this.http.post(
      `${this.baseAPI}/${method}`,
      JSON.stringify(ObjEntidad),
      {
        reportProgress: true,
        responseType: 'blob',
        observe: 'response',
      }
    );
  }
}
