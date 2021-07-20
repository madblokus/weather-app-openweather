import {useState, useEffect} from 'react';
import {API_BASE_URL, API_KEY} from "../apis/config";

const UseFetch = (initialUrl) => {
    const [url, setUrl] = useState(initialUrl);

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const [data2, setData2] = useState(null);
    const [error2, setError2] = useState(null);
    const [isLoading2, setIsLoading2] = useState(null);

    const [mergedData, setMergedData] = useState({data: null, data2: null});


    useEffect(() => {
        if(!url) return;
        setIsLoading(true);
        setData(null);
        setError(null);
        setData2(null);
        setIsLoading2(true);
        setError2(null);
        setMergedData({data: null, data2: null});



        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                if(data.cod >= 400) {
                    setError(data.message);
                        return;
                }
                setData(data);

                fetch(`${API_BASE_URL}/data/2.5/onecall?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&exclude=minutely&appid=${API_KEY}&units=metric`)
                    .then((response) => response.json())
                    .then((data2) =>  {
                        setIsLoading2(false);
                        if(data.cod >= 400) {
                            setError2(data.message);
                            return;
                        }
                        setData2(data2);
                        setMergedData({data: data, data2: data2});


                    })
                    .catch((error2) => {
                        setIsLoading2(false);
                        setError2(error2);
                    });

            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
            });

        //saveCoordinatesToState();
        }, [url]);
    return { data, data2, error, error2, isLoading, isLoading2, setUrl, mergedData};


};

export default UseFetch;