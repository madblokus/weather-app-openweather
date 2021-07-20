import React from 'react';
import './App.scss';
import CityInput from "./components/CityInput";
import {Container} from 'react-bootstrap';
import UseFetch from "./hooks/useFetch";
import {API_BASE_URL, API_KEY} from "./apis/config";
import WeatherList from "./components/WeatherList";

const App = () => {
    const {error, isLoading2, setUrl, data2, mergedData, data, isLoading} = UseFetch();

    const getContent = () => {
        if (error) return <h2>Error when fetching: {error}</h2>
        if (!data && !data2 && isLoading && isLoading2 ) return <h2>LOADING...</h2>
        if (!data2) return null;
        console.log(mergedData);
        return (
            <WeatherList weathers={data2.daily} />
        )
    }

    return (
        <Container className="App">
            <CityInput
                onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)}/>
            {getContent()}
        </Container>
    );
}
export default App;