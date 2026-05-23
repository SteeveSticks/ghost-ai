"use client";

import * as React from "react";

interface DialogPatternProps {
  title: string;
  description: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export function DialogPattern({
  title,
  description,
  footer,
  children,
}: DialogPatternProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-card text-foreground shadow-sm">
      <div className="space-y-4 p-6">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        {children ? <div>{children}</div> : null}
      </div>
      <div className="flex flex-col gap-2 border-t border-border px-6 py-4 sm:flex-row sm:justify-end">
        {footer}
      </div>
    </section>
  );
}
