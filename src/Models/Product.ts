export interface Products
{
    id:number,
    name:string,
    price:string,
    description:string,
    filePath:any,
    categoryid:number
    category:Category,
    offerid:number,
    offer:Offer,
    message:string,
    Image:any
}
export interface Category
{
    id:number
    name:any 
}
export interface Offer
{
    id:number,
    title:string,
    discount:string
}