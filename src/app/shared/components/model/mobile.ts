export interface Imobile{
    id: number,
    name: string;
    brand: string;
    price: number;
    offerprice:number;
    image:string;
    isAvailable: boolean,
    rating: number,
    noOfItems: number,
    specification : Array<string>,
    details:Array<string>,
}
