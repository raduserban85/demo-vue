import {Joke} from "../types/joke.ts";
import axios, {AxiosResponse} from "axios";

class JokesApi {
    async getNextTen(): Promise<Joke[]>  {
        const url: string = `https://official-joke-api.appspot.com/jokes/ten`;
        return axios.get(url)
            .then((response: AxiosResponse<Joke[]>): Joke[] => {
                return response.data;
            })
    }
}

export { JokesApi };