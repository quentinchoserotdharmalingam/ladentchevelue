import type { Section } from "@/content/types";

interface SectionRendererProps {
  sections: Section[];
}

function parseInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br/>");
}

function TextSection({
  section,
}: {
  section: { type: "text"; title?: string; content: string };
}) {
  return (
    <div>
      {section.title && (
        <h2 className="font-display text-2xl font-bold text-anthracite mb-4">
          {section.title}
        </h2>
      )}
      <div
        className="font-body text-base leading-7 text-anthracite/85"
        dangerouslySetInnerHTML={{
          __html: parseInlineMarkdown(section.content),
        }}
      />
    </div>
  );
}

function SubsectionBlock({
  section,
}: {
  section: { type: "subsection"; title: string; content: string };
}) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-anthracite mb-3">
        {section.title}
      </h3>
      <div
        className="font-body text-base leading-7 text-anthracite/85"
        dangerouslySetInnerHTML={{
          __html: parseInlineMarkdown(section.content),
        }}
      />
    </div>
  );
}

function QuoteBlock({
  section,
}: {
  section: { type: "quote"; text: string; author?: string };
}) {
  return (
    <blockquote className="border-l-4 border-or pl-5 py-2">
      <p className="font-display italic text-lg text-anthracite/80 leading-relaxed">
        {section.text}
      </p>
      {section.author && (
        <cite className="block mt-2 font-body text-sm text-anthracite/50 not-italic">
          — {section.author}
        </cite>
      )}
    </blockquote>
  );
}

function HighlightBlock({
  section,
}: {
  section: { type: "highlight"; text: string };
}) {
  return (
    <div className="bg-sapin/5 border border-sapin/10 rounded-[var(--radius-card)] p-5">
      <div
        className="font-body text-sm leading-6 text-anthracite/75"
        dangerouslySetInnerHTML={{
          __html: parseInlineMarkdown(section.text),
        }}
      />
    </div>
  );
}

function TableBlock({
  section,
}: {
  section: { type: "table"; title?: string; rows: [string, string][] };
}) {
  return (
    <div>
      {section.title && (
        <h3 className="font-display text-lg font-bold text-anthracite mb-3">
          {section.title}
        </h3>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {section.rows.map(([label, value], i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-creme/50" : "bg-white"}
              >
                <td className="font-body font-semibold text-sm text-anthracite py-2.5 px-4">
                  {label}
                </td>
                <td className="font-body text-sm text-anthracite/75 py-2.5 px-4">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ListBlock({
  section,
}: {
  section: { type: "list"; title?: string; items: string[] };
}) {
  return (
    <div>
      {section.title && (
        <h3 className="font-display text-lg font-bold text-anthracite mb-3">
          {section.title}
        </h3>
      )}
      <ul className="space-y-2 ml-1">
        {section.items.map((item, i) => (
          <li key={i} className="flex gap-2 font-body text-sm text-anthracite/80">
            <span className="text-sapin/50 mt-0.5">•</span>
            <span
              dangerouslySetInnerHTML={{
                __html: parseInlineMarkdown(item),
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ImageBlock({
  section,
}: {
  section: { type: "image"; src: string; alt: string; caption?: string };
}) {
  return (
    <figure className="my-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={section.src}
        alt={section.alt}
        className="w-full rounded-[var(--radius-card)] shadow-sm"
        loading="lazy"
      />
      {section.caption && (
        <figcaption className="font-body text-xs text-anthracite/45 text-center mt-2 italic">
          {section.caption}
        </figcaption>
      )}
    </figure>
  );
}

function SeparatorBlock() {
  return (
    <div className="flex justify-center py-2">
      <span className="text-anthracite/15 tracking-[0.5em] text-sm">. . .</span>
    </div>
  );
}

export function SectionRenderer({ sections }: SectionRendererProps) {
  return (
    <div className="space-y-8">
      {sections.map((section, i) => {
        switch (section.type) {
          case "text":
            return <TextSection key={i} section={section} />;
          case "subsection":
            return <SubsectionBlock key={i} section={section} />;
          case "quote":
            return <QuoteBlock key={i} section={section} />;
          case "highlight":
            return <HighlightBlock key={i} section={section} />;
          case "table":
            return <TableBlock key={i} section={section} />;
          case "list":
            return <ListBlock key={i} section={section} />;
          case "image":
            return <ImageBlock key={i} section={section} />;
          case "separator":
            return <SeparatorBlock key={i} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
