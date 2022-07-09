export interface ListPager<T>{
    data:T[];
    recordsTotal:number;
    recordsFiltered:number;
}