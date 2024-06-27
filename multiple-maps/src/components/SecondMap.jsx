import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

export function SecondMap() {
  const position = [52.51, 13.38]

  const customIcon = new Icon({
    iconUrl: '/icons8-select-24.png',
    iconSize: [20, 20],
  })

  return (
    <section className='map-component2' >
      <div className='map2'>
      <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         
        />
        <Marker position={position}
          icon={customIcon}
        >
          <Popup>
            SSSADSDADAWF
          </Popup>
        </Marker>
      </MapContainer>
      </div>
    </section>
  )
}