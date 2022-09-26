
export interface SpaceSystemModel{
        id: number;
        name:string;
        age:number;
}
export interface responeSpaceSystem{
    code: number;
    message: string;
    responseData: SpaceSystemModel[]
}
export class SpaceSystemClass<SpaceSystemModel>{
    id: number;
    name="";
    age=0;
}