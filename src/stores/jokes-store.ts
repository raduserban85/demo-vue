import {JokeStoreDefinition} from "./type/joke-store-definition.ts";
import {defineStore} from "pinia";
import {JokeInterface} from "./interface/joke-interface.ts";
import {JokesApi} from "../apis/jokes-api.ts";
import {Joke} from "../types/joke.ts";

const useJoke: JokeStoreDefinition = defineStore(
    "joke",
    (): JokeInterface => {
        const api: JokesApi = new JokesApi();
        
        async function getNextTen(): Promise<Joke[]> {
            return api.getNextTen();
        }
        
        return {
            getNextTen
        };
    }
);

export { useJoke };