export interface SpaceObjectModel{
    id: number;
    spaceSystem_id:number;
    name:string;
    age:number;
    type: number;
    diameter:number;
    mass:number;
}
export interface responeSpaceObject{
    code: number;
    message: string;
    responseData: SpaceObjectModel[];

}export class SpaceObjectClass<SpaceObjectModel>{
    id: number;
    spaceSystem_id=0;
    name="";
    age=0;
    type=0;
    diameter= 0;
    mass= 0;
}