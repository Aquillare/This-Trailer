import { useState, useEffect } from "react";

const initialState = {
    user: {},
    "playing": {},
    numberPageTrends:1,
    numberPageOriginals:1,
    "movieInfo":[],
    "search":[],
    "myList": [],
    "trends": [],
    "originals": [],
    "videoKey":[]
}


const useInitialState = () => {

    const [state, setEstate] = useState(initialState);

    return{
        state,
    }

};

export default useInitialState;

