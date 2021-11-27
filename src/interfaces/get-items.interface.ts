export interface GetItemInterface {
    id: string;
    name: string;
    brand: string;
    likes: number;
    views: number;
    popularity: number;
    images: [{id: string, image: string}];
}