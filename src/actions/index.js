export const setFavorite = payload => ({
    type: "SET_FAVORITE",
    payload,
});

export const deleteFavorite = payload => ({
    type: "DELETE_FAVORITE",
    payload,
});

export const loginRequest = payload => ({
    type: "LOGIN_REQUEST",
    payload,
});

export const logoutRequest = payload => ({
    type: "LOGOUT_REQUEST",
    payload,
});

export const registerRequest = payload => ({
    type: "REGISTER_REQUEST",
    payload,
});

export const getVideoSource = payload => ({
    type: 'GET_VIDEO_SOURCE',
    payload,
});

export const searchVideo = payload => ({
    type: 'SEARCH_VIDEO',
    payload,
});

export const resultSearch = payload => ({
    type: 'RESULT_SEARCH',
    payload,
});

export const addVideosStateOriginals = payload => ({
    type: 'ADD_VIDEOS_STATE_ORIGINALS',
    payload,
})

export const addVideosStateTrends = payload => ({
    type: 'ADD_VIDEOS_STATE_TRENDS',
    payload,
})

export const nextPageTrends = payload => ({
    type: 'NEXT_PAGE_TRENDS',
    payload,
})

export const nextPageOriginals = payload => ({
    type: 'NEXT_PAGE_ORIGINALS',
    payload,
})

export const addKeyVideo = payload => ({
    type: 'ADD_KEY_VIDEO',
    payload
})

export const getMovieInfo = payload => ({
    type: 'GET_MOVIE_INFO',
    payload
})

export const changeLenguage = payload => ({
    type: 'CHANGE_LENGUAGE',
    payload
})

