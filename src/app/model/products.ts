export interface Product {
        productID: number;
        productNameEnglish: string;
        productNameArabic: string;
        descriptionArabic: string;
        descriptionEnglish: string;
        cateogryID: number;
        imageURL: string;
 }

 export interface MetaData {
    recordsFiltered: number;
    recordsTotal: number;
}

export interface ListPager2<T> {
    data: T[];
    metaData: MetaData;
}



