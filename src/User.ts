import { faker } from '@faker-js/faker';
import { Marker } from './interface/marker';
export  class User implements Marker{
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor(){
        this.name = faker.person.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

    markerContent():string{
        return `<h5> Name: ${this.name}</h5>`
    }
}