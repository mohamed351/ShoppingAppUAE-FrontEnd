export interface Serial{
    productId:number;
    serial:string;
    subSerial:SubSerial[]
}
export interface SubSerial{
    mainSerial:string;
    serial:string;
}