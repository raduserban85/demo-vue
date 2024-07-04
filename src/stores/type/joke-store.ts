import {_ExtractActionsFromSetupStore, _ExtractGettersFromSetupStore, _ExtractStateFromSetupStore, Store} from "pinia";
import {JokeInterface} from "../interface/joke-interface.ts";

type JokeStore = Store<
    "joke",
    _ExtractStateFromSetupStore<JokeInterface>,
    _ExtractGettersFromSetupStore<JokeInterface>,
    _ExtractActionsFromSetupStore<JokeInterface>
>;

export type { JokeStore };