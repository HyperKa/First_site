import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of } from "rxjs";

export interface Student {
    name: string;
    surname: string;
    group: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
    constructor(private http: HttpClient) { }

    getStudents(): Observable<Array<Student>> {
        return this.http.get<Array<Student>>('assets/data1.json')
            .pipe(
                catchError(err => {
                    console.log(err);
                    return of([]);
                })
            )
    }
}