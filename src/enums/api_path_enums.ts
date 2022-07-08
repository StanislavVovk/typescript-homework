interface IAPI_PATH {
    SEARCH?: string,
    POPULAR?: string,
    RATED?: string,
    UPCOMING?: string,
    DETAILS?: string
}

const API_PATH: IAPI_PATH = {
    SEARCH: '/search',
    POPULAR: 'popular',
    RATED: 'top_rated',
    UPCOMING: 'upcoming',
    DETAILS: ""
}

export {API_PATH, IAPI_PATH};