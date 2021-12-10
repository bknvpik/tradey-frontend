export interface GetItemInterface {
    id: string;
    name: string;
    brand: string;
    popularity?: {
        views: number;
        likes: number;
    };
    images: [{id: string, image: string}];
    calculatedPopularity?: number;
}