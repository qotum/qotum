import type getDictionary from "@app/_get-dictionnary";

export type TypeOfDictionary = Awaited<ReturnType<typeof getDictionary>>;
