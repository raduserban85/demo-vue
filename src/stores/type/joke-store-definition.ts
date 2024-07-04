import {_ExtractGettersFromSetupStore, _ExtractStateFromSetupStore, StoreDefinition} from "pinia";
import {JokeInterface} from "../interface/joke-interface.ts";

type JokeStoreDefinition = StoreDefinition<
    "joke",
    _ExtractStateFromSetupStore<JokeInterface>,
    _ExtractGettersFromSetupStore<JokeInterface>,
    _ExtractStateFromSetupStore<JokeInterface>
>;

export type { JokeStoreDefinition };