import { faker } from '@faker-js/faker';
import { Marker } from './interface/marker';
export class Company implements Marker{
    companyName: string;
    catchPhrase: string;
    location: {
        lat:number;
        lng: number;
    }

    constructor(){
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

    markerContent():string{
        return `<h4>Company Name: ${this.companyName}</h4><br>
        <h6>Phrase: ${this.catchPhrase}</h6>`
    }
}