import { dark } from "@clerk/ui/themes";
import type { Appearance } from "@clerk/ui";

export const clerkAppearance: Appearance = {
  theme: dark,
  variables: {
    colorPrimary: "var(--accent-primary)",
    colorBackground: "var(--bg-surface)",
    colorForeground: "var(--text-primary)",
    colorMutedForeground: "var(--text-muted)",
    colorInput: "var(--bg-elevated)",
    colorInputForeground: "var(--text-primary)",
    colorNeutral: "var(--text-primary)",
    colorDanger: "var(--state-error)",
    colorSuccess: "var(--state-success)",
    colorWarning: "var(--state-warning)",
    fontFamily: "var(--font-geist-sans)",
    borderRadius: "var(--radius)",
  },
  elements: {
    card: "bg-surface border border-border rounded-3xl",
    formButtonPrimary: "rounded-xl",
    formFieldInput: "rounded-xl",
  },
};
