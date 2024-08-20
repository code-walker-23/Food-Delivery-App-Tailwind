const GetLocation = ( setLocation,setError ) => {
  console.log(setError);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setError(null); // Clear any previous error
      },
      (error) => {
        setError(error.message);
      }
    );
  } 
};
export default GetLocation;
