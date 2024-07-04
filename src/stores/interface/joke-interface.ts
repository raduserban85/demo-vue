import {Joke} from "../../types/joke.ts";

interface JokeInterface {
    getNextTen(): Promise<Joke[]>;
}

export { type JokeInterface };