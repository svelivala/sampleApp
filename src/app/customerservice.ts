import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './customer';

@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<any>('assets/licenses.json')
            .toPromise()
            .then(res => <Product[]>res.data)
            .then(data => { return data; });
    }
}