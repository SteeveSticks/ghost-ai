import { Check } from "lucide-react";

const features = [
  "Describe a system in plain English and watch it map onto a shared canvas.",
  "Collaborate in real time with live cursors and presence.",
  "Generate a Markdown technical spec from the finished design.",
];

const headings = [
  "AI Architecture Generation",
  "Real-time Collaboration",
  "Instant Spec Generation",
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 bg-background text-foreground lg:grid-cols-2">
      <aside className="hidden flex-col justify-between border-r border-border bg-surface px-10 py-12 lg:flex">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="inline-flex size-7 items-center justify-center rounded-md bg-accent-dim text-brand">
            G
          </span>
          Ghost AI
        </div>

        <div className="space-y-6">
          <p className="text-balance text-2xl font-semibold leading-tight">
            Design systems at the
            <br /> speed of thought.
          </p>
          <p className="text-md text-muted-foreground ">
            Describe your architecture in plain English. Ghost AI maps
            it to a shared canvas your whole team can refine it in
            real time.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {features.map((feature, index) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  <div className="grid">
                    <h1 className="font-medium text-white text-md">
                      {headings[index]}
                    </h1>
                    <span>{feature}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Ghost AI
        </p>
      </aside>

      <main className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-10">
        <div className="w-full max-w-sm">{children}</div>
      </main>
    </div>
  );
}
