import { SchematicClient } from "@schematichq/schematic-typescript-node";

const apiKey = process.env.SCHEMATIC_API_KEY;

if (!apiKey) {
  throw new Error("SCHEMATIC_API_KEY is not set");
}

export const client = new SchematicClient({
  apiKey,
  cacheProviders: {
    flagChecks: [],
  },
});
