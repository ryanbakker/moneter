"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { SchematicProvider } from "@schematichq/schematic-react";
import { ReactNode } from "react";
import SchematicWrapped from "./SchematicWrapped";
import { useTheme } from "next-themes";

export function ClerkSchematicProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();

  const schematicPubKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;

  if (!schematicPubKey) {
    throw new Error("No Schematic Publishable Key");
  }

  return (
    <ClerkProvider
      afterSignOutUrl="/"
      appearance={{
        baseTheme: resolvedTheme === "dark" ? dark : undefined,
      }}
    >
      <SchematicProvider publishableKey={schematicPubKey}>
        <SchematicWrapped>{children}</SchematicWrapped>
      </SchematicProvider>
    </ClerkProvider>
  );
}
