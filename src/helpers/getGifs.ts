import axios from "axios";


const getGifs = async ( offset: number = 0, query: string = '') => {

    try {
            const resp = await axios({
                url: 'https://api.giphy.com/v1/gifs/search',
                method: 'GET',
                params: {
                    'api_key' : process.env.REACT_APP_API_KEY,
                    'q': query,
                    'offset': offset,
                    'limit': 20
                }
            })
            return resp
    } catch (error) {
        console.log(error)
    }
}

export default getGifs;