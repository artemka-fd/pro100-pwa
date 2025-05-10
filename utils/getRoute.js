// utils/getRoute.js
export async function getRouteFromMapbox(start, end, token) {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${token}`
  
    try {
      const res = await fetch(url)
      const data = await res.json()
  
      if (!data.routes?.length) return null
  
      const route = data.routes[0]
      return {
        distanceKm: (route.distance / 1000).toFixed(1),
        durationMin: Math.round(route.duration / 60),
        geometry: route.geometry
      }
    } catch (err) {
      console.error("Mapbox route error:", err)
      return null
    }
  }
  