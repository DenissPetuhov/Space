import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ISpaceSystem } from 'src/app/Models/Interface/ISpaceSystem';

@Injectable({
  providedIn: 'root'
})
export class SapceSystemService {

  controler= "SpaceSystem/";
  constructor(private http: HttpClient) { 
    
  }
  public GetAll(): Observable<ISpaceSystem[]> {
    return this.http.get<ISpaceSystem[]>(environment.appUrl + this.controler + "GetAllSpaceSystems")
  }
  public GetById(system:ISpaceSystem): Observable<ISpaceSystem> {
    return this.http.get<ISpaceSystem>(environment.appUrl + this.controler + "GetSpaceSystemById/" + system.id)
  }
  public PostSave(system:ISpaceSystem): Observable<ISpaceSystem> {
    return this.http.post<ISpaceSystem>(environment.appUrl + this.controler + "SaveSpaceSystem",system)
  }
  public PutUpdate(system:ISpaceSystem): Observable<ISpaceSystem> {
    return this.http.put<ISpaceSystem>(environment.appUrl + this.controler + "UpdateSpaceSystem",system)
  }
  public Delete(system:ISpaceSystem): Observable<ISpaceSystem> {
    return this.http.delete<ISpaceSystem>(environment.appUrl + this.controler + "DeleteSpaceSystem/"+system.id);
  }
}
