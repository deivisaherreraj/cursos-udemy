import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from 'src/app/app-config/app.config';

export class BaseGenericSimpleService {
  protected baseAPI: string;
  protected baseExternalAPI: string;
  nameAPI: string;
  refeshList = false;

  constructor(
    readonly http: HttpClient,
    readonly api: string,
    readonly urlBaseAPI = ''
  ) {
    if (urlBaseAPI && urlBaseAPI.length > 0) {
      this.baseExternalAPI = urlBaseAPI;
    } else {
      this.baseExternalAPI = AppConfigService?.settings?.baseAPI;
    }

    this.baseAPI = this.baseExternalAPI + api;
    this.nameAPI = api;
  }

  protected refreshData(): HttpHeaders {
    let headers = new HttpHeaders();

    if (this.refeshList) {
      headers = headers.set('reset-cache', 'true');
    }

    return headers;
  }

  get() {
    return this.http.get(`${this.baseAPI}`, {
      headers: this.refreshData(),
    });
  }

  getExterno(externo: string) {
    return this.http.get(`${this.baseExternalAPI + externo}`, {
      headers: this.refreshData(),
    });
  }

  getMethod(method: string) {
    return this.http.get(`${this.baseAPI}/${method}`, {
      headers: this.refreshData(),
    });
  }

  getMethodExterno(externo: string, method: string) {
    return this.http.get(`${this.baseExternalAPI + externo}/${method}`, {
      headers: this.refreshData(),
    });
  }

  getId(id: number) {
    return this.http.get(`${this.baseAPI}/${id}`, {
      headers: this.refreshData(),
    });
  }

  getIdMethod(method: string, id: number) {
    return this.http.get(`${this.baseAPI}/${method}/${id}`, {
      headers: this.refreshData(),
    });
  }

  getIdMethodExterno(externo: string, method: string, id: number) {
    return this.http.get(`${this.baseExternalAPI + externo}/${method}/${id}`, {
      headers: this.refreshData(),
    });
  }

  put<TObject>(ObjEntidad: TObject) {
    return this.http.put(`${this.baseAPI}`, ObjEntidad);
  }

  putMethod<TValue>(method: string, ObjEntidad: TValue) {
    return this.http.put(`${this.baseAPI}/${method}`, ObjEntidad);
  }

  putMethodExterno<TValue>(
    externo: string,
    method: string,
    ObjEntidad: TValue
  ) {
    return this.http.put(
      `${this.baseExternalAPI + externo}/${method}`,
      ObjEntidad
    );
  }

  delete<TValue>(id: TValue) {
    return this.http.delete(`${this.baseAPI}/${id}`);
  }

  deleteExterno<TValue>(externo: string, id: TValue) {
    return this.http.delete(
      `${this.baseExternalAPI + externo}/${id}`
    );
  }

  deleteMethod<TValue>(method: string, id: TValue) {
    return this.http.delete(`${this.baseAPI}/${method}/${id}`);
  }

  deleteMethodExterno<TValue>(externo: string, method: string, id: TValue) {
    return this.http.delete(
      `${this.baseExternalAPI + externo}/${method}/${id}`
    );
  }

  post<TObject>(ObjEntidad: TObject) {
    return this.http.post(`${this.baseAPI}`, ObjEntidad);
  }

  postMethod<TValue>(method: string, ObjEntidad: TValue) {
    return this.http.post(`${this.baseAPI}/${method}`, ObjEntidad);
  }

  postMethodExterno<TValue>(
    externo: string,
    method: string,
    ObjEntidad: TValue
  ) {
    return this.http.post(
      `${this.baseExternalAPI + externo}/${method}`,
      ObjEntidad
    );
  }
}
