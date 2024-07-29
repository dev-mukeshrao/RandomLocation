import { Marker } from "./interface/marker";
// const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

export class CustomMap {
  private googleMap: any;
  private AdvancedMarkerElement: any;
  private bounds: google.maps.LatLngBounds;

  constructor(divId: string) {
    this.bounds = new google.maps.LatLngBounds();
    this.initMap(divId);
  }

  private async initMap(divId: string): Promise<void> {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      "marker"
    )) as google.maps.MarkerLibrary;
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 4,
        center: {
          lat: 0,
          lng: 0,
        },
        mapId: "DEMO_MAP_ID",
      }
    );
    this.AdvancedMarkerElement = AdvancedMarkerElement;
  }

  //add marker

  public addMarker: (mark: Marker) => Promise<void> = async (mark: Marker) => {
    if (!this.AdvancedMarkerElement) {
      console.error("AdvancedMarkerElement is not loaded yet.");
      return;
    }

   
    const map = this.addMarker;
    const position = new google.maps.LatLng(mark.location.lat, mark.location.lng)
    const marker = await new this.AdvancedMarkerElement({
      map: this.googleMap,
      position: position
    });

    const infowindow = new google.maps.InfoWindow({
        content: mark.markerContent()
      });
    marker.addListener("click", () => {
        infowindow.open(this.googleMap,marker);
      });
    this.bounds.extend(position);

    this.googleMap.fitBounds(this.bounds);
  };
}
