import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { responeSpaceObject, SpaceObjectModel } from '../Models/SpaceObjectModel';
import { responeSpaceSystem, SpaceSystemModel } from '../Models/SpaceSystemModel';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  
  
  constructor(private http: HttpClient) { }
  public GetSpaceSystem(): Observable<responeSpaceSystem>{
  return this.http.get<responeSpaceSystem>(environment.appUrl+"/GetAllSpaceSystems")  
  }
  public GetSpaceObject(): Observable<responeSpaceObject>{
    return this.http.get<responeSpaceObject>(environment.appUrl+"/GetAllSpaceObjects")  
  }
  public UpadateSpaceSystem(system: SpaceSystemModel): Observable<responeSpaceSystem>{
    return this.http.put<responeSpaceSystem>(environment.appUrl+"/UpdateSpaceSystem",system)  
  }
  public CreateSpaceSystem(system: SpaceSystemModel): Observable<responeSpaceSystem>{
    return this.http.post<responeSpaceSystem>(environment.appUrl+"/SaveSpaceSystem",system)  
  }
  public DeleteSpaceSystem(system: SpaceSystemModel): Observable<responeSpaceSystem>{
    return this.http.delete<responeSpaceSystem>(environment.appUrl+"/DeleteSpaceSystem/"+system.id)  
  }
    public UpadateSpaceObject(system: SpaceObjectModel): Observable<responeSpaceObject>{
      return this.http.put<responeSpaceObject>(environment.appUrl+"/UpdateSpaceObject",system)  
  }
    public CreateSpaceObject(object: SpaceObjectModel): Observable<responeSpaceObject>{
      return this.http.post<responeSpaceObject>(environment.appUrl+"/SaveSpaceObject",object)  
  }
    public DeleteSpaceObject(system: SpaceObjectModel): Observable<responeSpaceObject>{
      return this.http.delete<responeSpaceObject>(environment.appUrl+"/DeleteSpaceObject/"+system.id)  
  }
  public GetSpaceObjectsBySpaceSystemId(system: SpaceSystemModel): Observable<responeSpaceObject>{
    return this.http.get<responeSpaceObject>(environment.appUrl+"/GetSpaceObjectsBySpaceSystemId/"+system.id)  
}
  
}
