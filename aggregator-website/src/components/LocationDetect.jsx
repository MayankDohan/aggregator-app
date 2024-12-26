import { useEffect, useState } from "react";

const LocationDetect = ()=>{

 const [userLocation,setUserLocation] =    useState(null);
 const [address,setAddress] = useState(null)

 const getUserLocation = ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            const {latitude,longitude} = position.coords 
            setUserLocation({latitude,longitude})
            fetchAddress(latitude,longitude)
        },
            
      (error)=>{
        console.log("error getting user location", error)
      }  )
    }
    else{
        alert("Geo location is not supported by user browser")
    }
 }
 const fetchAddress =  ({latitude,longitude})=>{
    const apiKey = "5e1c4a11834f56af2e334c1df75db2ea"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    fetch(apiUrl).then((response)=>response.json()).then((data)=>{
         const city = data.address.city || data.address.town || data.address.village;
        const pincode = data.address.postcode;
        console.log(city)
        setAddress({ city, pincode });
}).catch((error) => {
    console.log("Error fetching address", error);
  });
}
 useEffect(()=>{
    getUserLocation()
 },[])
    return(
        <div className="mt-5">
            {userLocation&&(
                <div>
                <h1>latitude: {userLocation.latitude}</h1>
                <h1>longitude: {userLocation.longitude} </h1>
                <h1>City: {address.city}</h1>
                <h1>Postcode:{address.postcode}</h1>
                </div>
            )}
        </div>



    )
} 

export default LocationDetect;