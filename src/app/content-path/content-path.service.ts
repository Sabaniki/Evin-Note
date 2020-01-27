import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentPathService {
  contentPaths = new Array<string>();
  constructor() { }
}
