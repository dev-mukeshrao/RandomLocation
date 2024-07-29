export interface Marker{
    location:{
        lat:number,
        lng: number
    };

    markerContent(): string;
}