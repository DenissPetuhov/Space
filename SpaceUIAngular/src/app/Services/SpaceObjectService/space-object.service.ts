import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ISpaceObject } from 'src/app/Models/Interface/ISpaceObject';
import { ISpaceSystem } from 'src/app/Models/Interface/ISpaceSystem';

@Injectable({
  providedIn: 'root'
})
export class SpaceObjectService {

  controler= "SpaceObject/";
  constructor(private http: HttpClient) { 
    
  }
  public GetAll(): Observable<ISpaceObject[]> {
    return this.http.get<ISpaceObject[]>(environment.appUrl + this.controler + "GetAllSpaceObjects")
  }
  public GetBySpaceSystemId(system:ISpaceSystem): Observable<ISpaceObject[]> {
    return this.http.get<ISpaceObject[]>(environment.appUrl + this.controler + "GetSpaceObjectsBySpaceSystemId/"+ system.id )
  }

  public GetById(object:ISpaceObject): Observable<ISpaceObject> {
    return this.http.get<ISpaceObject>(environment.appUrl + this.controler + "GetSpaceObjectById/" + object.id)
  }

  public PostSave(object:ISpaceObject): Observable<ISpaceObject> {
    return this.http.post<ISpaceObject>(environment.appUrl + this.controler + "SaveSpaceObject",object)
  }

  public PutUpdate(object:ISpaceObject): Observable<ISpaceObject> {
    return this.http.put<ISpaceObject>(environment.appUrl + this.controler + "UpdateSpaceObject",object)
  }

  public Delete(object:ISpaceObject): Observable<ISpaceObject> {
    return this.http.delete<ISpaceObject>(environment.appUrl + this.controler + "DeleteSpaceObject/"+object.id)
  }

}
