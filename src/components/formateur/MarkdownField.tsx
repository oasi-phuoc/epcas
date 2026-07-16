"use client";

import { useRef } from "react";
import { MarkdownToolbar } from "@/components/MarkdownToolbar";
import { TextArea } from "@/components/ui";

type Props = {
  label: string;
  value: string;
  onChange: (next: string) => void;
  hint?: string;
  className?: string;
  required?: boolean;
};

/** Zone texte avec la même barre de formatage que la théorie. */
export function MarkdownField({
  label,
  value,
  onChange,
  hint,
  className = "min-h-24 text-justify text-sm leading-relaxed",
  required,
}: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="space-y-2">
      <MarkdownToolbar
        textareaRef={ref}
        value={value}
        onChange={onChange}
      />
      <TextArea
        ref={ref}
        label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        hint={hint}
        className={className}
        required={required}
      />
    </div>
  );
}
