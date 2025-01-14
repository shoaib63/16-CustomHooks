import { useState, useEffect } from 'react';

import Places from './Places.jsx';
import Error from './Error.jsx';
import { fetchAvailablePlaces } from '../http.js';
import { useFetch } from '../hooks/useFetch.js';

export default function AvailablePlaces({ onSelectPlace }) {
  // const [isFetching, setIsFetching] = useState(false);
  // const [availablePlaces, setAvailablePlaces] = useState([]);
  // const [error, setError] = useState();

  // navigator.geolocation.getCurrentPosition((position) => {
        //   const sortedPlaces = sortPlacesByDistance(
        //     places,
        //     position.coords.latitude,
        //     position.coords.longitude
        //   );
          
        // });

  const {isFetching , error , fetchedData:availablePlaces , setFetchedData: setAvailablePlaces }
  = useFetch(fetchAvailablePlaces , []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
