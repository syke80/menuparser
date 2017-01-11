import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { MenuResponseModel } from '../models/menuResponse.model';

@Injectable()

export class MenuService {
    public itemCreated$: EventEmitter<MenuResponseModel>;
    private serviceEndpoint: string = 'https://api.burberry.com/v1/apps/ecom/navigation?country=GB&language=en';

    constructor(private http: Http) {
        this.itemCreated$ = new EventEmitter();
    }
    
    getMenu(): Promise<MenuResponseModel> {
        return this.http.get(this.serviceEndpoint)
            .toPromise()
            .then( function(response: Response): MenuResponseModel {
                return response.json();
            })
            .catch(this.handleError);
    }

    // TODO: use ApiResponse (abstract class: msg, error) instead of Any
    // TODO: response must be string instead of any
    private handleError(error: Response): Promise<any> {
//        let data: MenuApiErrorModel = error.json();
        let data: any = error.json();
        return Promise.reject(data.error || data.msg || error);
    }
}