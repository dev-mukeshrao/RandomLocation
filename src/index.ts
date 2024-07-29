import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
const user = new User();
const company = new Company();
console.log(user);
console.log(company);


document.addEventListener("DOMContentLoaded", async () => {
    const map = new CustomMap("map");
    await new Promise(resolve => setTimeout(resolve, 1000));
    map.addMarker(user);
    map.addMarker(company);
});



