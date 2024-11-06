import type { Locale } from "i18n-config";
import "server-only";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
	en: () => import("./_dictionaries/en.json").then((module) => module.default),
	fr: () => import("./_dictionaries/fr.json").then((module) => module.default),
};

const getDictionary = async (locale: Locale) =>
	dictionaries[locale]?.() ?? dictionaries.en();

export default getDictionary;
