"use client";

import type { Section } from "@/content/types";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CountUp } from "@/components/animations/CountUp";

interface ImmersiveSectionRendererProps {
  sections: Section[];
  accentColor?: string;
}

function parseInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br/>");
}

export function ImmersiveSectionRenderer({
  sections,
  accentColor = "var(--color-sapin)",
}: ImmersiveSectionRendererProps) {
  return (
    <div className="space-y-16 md:space-y-24">
      {sections.map((section, i) => (
        <ImmersiveBlock key={i} section={section} index={i} accentColor={accentColor} />
      ))}
    </div>
  );
}

function ImmersiveBlock({
  section,
  index,
  accentColor,
}: {
  section: Section;
  index: number;
  accentColor: string;
}) {
  switch (section.type) {
    case "text":
      return <ImmersiveText section={section} index={index} accentColor={accentColor} />;
    case "subsection":
      return <ImmersiveSubsection section={section} index={index} />;
    case "quote":
      return <ImmersiveQuote section={section} />;
    case "highlight":
      return <ImmersiveHighlight section={section} accentColor={accentColor} />;
    case "table":
      return <ImmersiveTable section={section} accentColor={accentColor} />;
    case "list":
      return <ImmersiveList section={section} accentColor={accentColor} />;
    case "image":
      return <ImmersiveImage section={section} />;
    case "separator":
      return <ImmersiveSeparator accentColor={accentColor} />;
    case "hero-quote":
      return <ImmersiveHeroQuote section={section} />;
    case "data-card":
      return <ImmersiveDataCard section={section} accentColor={accentColor} />;
    case "chapter-break":
      return <ImmersiveChapterBreak section={section} accentColor={accentColor} />;
    case "timeline":
      return <ImmersiveTimeline section={section} accentColor={accentColor} />;
    case "ambient":
      return <ImmersiveAmbient section={section} />;
    default:
      return null;
  }
}

/* ═══ Text ═══ */
function ImmersiveText({
  section,
  index,
  accentColor,
}: {
  section: { type: "text"; title?: string; content: string };
  index: number;
  accentColor: string;
}) {
  if (section.title) {
    return (
      <ScrollReveal mode="continuous">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px" style={{ backgroundColor: accentColor }} />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-anthracite">
              {section.title}
            </h2>
          </div>
          <div
            className="font-body text-base leading-[1.85] text-anthracite/80"
            dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(section.content) }}
          />
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal mode="continuous" delay={index * 0.05}>
      <div className="max-w-2xl mx-auto">
        <div
          className="font-body text-base leading-[1.85] text-anthracite/80"
          dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(section.content) }}
        />
      </div>
    </ScrollReveal>
  );
}

/* ═══ Subsection (chapter break style) ═══ */
function ImmersiveSubsection({
  section,
  index,
}: {
  section: { type: "subsection"; title: string; content: string };
  index: number;
}) {
  return (
    <ScrollReveal mode="continuous">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-baseline gap-4 mb-5">
          <span className="font-display text-4xl font-bold text-anthracite/10">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-xl font-bold text-anthracite">
            {section.title}
          </h3>
        </div>
        <div
          className="font-body text-base leading-[1.85] text-anthracite/80"
          dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(section.content) }}
        />
      </div>
    </ScrollReveal>
  );
}

/* ═══ Quote (full-width cinematic) ═══ */
function ImmersiveQuote({
  section,
}: {
  section: { type: "quote"; text: string; author?: string };
}) {
  return (
    <ScrollReveal mode="continuous">
      <div className="max-w-3xl mx-auto text-center py-8 md:py-12">
        <div className="font-display text-4xl text-anthracite/10 mb-4" aria-hidden="true">&ldquo;</div>
        <blockquote className="font-display italic text-xl md:text-2xl text-anthracite/75 leading-relaxed px-4">
          {section.text}
        </blockquote>
        {section.author && (
          <cite className="block mt-4 font-body text-sm text-anthracite/40 not-italic">
            — {section.author}
          </cite>
        )}
      </div>
    </ScrollReveal>
  );
}

/* ═══ Highlight (slide-in panel) ═══ */
function ImmersiveHighlight({
  section,
  accentColor,
}: {
  section: { type: "highlight"; text: string };
  accentColor: string;
}) {
  return (
    <ScrollReveal direction="right" mode="continuous">
      <div className="max-w-2xl mx-auto">
        <div
          className="rounded-2xl p-6 md:p-8 border-l-4"
          style={{
            borderLeftColor: accentColor,
            backgroundColor: `${accentColor}08`,
          }}
        >
          <div
            className="font-body text-sm leading-7 text-anthracite/70"
            dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(section.text) }}
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ═══ Table (data cards) ═══ */
function ImmersiveTable({
  section,
  accentColor,
}: {
  section: { type: "table"; title?: string; rows: [string, string][] };
  accentColor: string;
}) {
  return (
    <div className="max-w-2xl mx-auto">
      {section.title && (
        <ScrollReveal>
          <h3 className="font-display text-lg font-bold text-anthracite mb-6">
            {section.title}
          </h3>
        </ScrollReveal>
      )}
      <div className="space-y-2">
        {section.rows.map(([label, value], i) => (
          <ScrollReveal key={i} delay={i * 0.05} mode="continuous">
            <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white border border-border">
              <span className="font-body text-sm font-semibold text-anthracite">{label}</span>
              <span className="font-body text-sm text-anthracite/60">{value}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

/* ═══ List (timeline style) ═══ */
function ImmersiveList({
  section,
  accentColor,
}: {
  section: { type: "list"; title?: string; items: string[] };
  accentColor: string;
}) {
  return (
    <div className="max-w-2xl mx-auto">
      {section.title && (
        <ScrollReveal>
          <h3 className="font-display text-lg font-bold text-anthracite mb-6">
            {section.title}
          </h3>
        </ScrollReveal>
      )}
      <div className="relative pl-6 border-l-2 border-border space-y-4">
        {section.items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.06} mode="continuous">
            <div className="relative">
              <div
                className="absolute -left-[25px] top-2 w-2 h-2 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
              <p
                className="font-body text-sm text-anthracite/75 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(item) }}
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

/* ═══ Image ═══ */
function ImmersiveImage({
  section,
}: {
  section: { type: "image"; src: string; alt: string; caption?: string };
}) {
  return (
    <ScrollReveal mode="continuous">
      <figure className="max-w-3xl mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={section.src}
          alt={section.alt}
          className="w-full rounded-2xl shadow-md"
          loading="lazy"
        />
        {section.caption && (
          <figcaption className="font-body text-xs text-anthracite/40 text-center mt-3 italic">
            {section.caption}
          </figcaption>
        )}
      </figure>
    </ScrollReveal>
  );
}

/* ═══ Separator (breathing space) ═══ */
function ImmersiveSeparator({ accentColor }: { accentColor: string }) {
  return (
    <div className="flex justify-center py-4" aria-hidden="true">
      <div className="flex items-center gap-3">
        <div className="w-8 h-px" style={{ backgroundColor: `${accentColor}30` }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: `${accentColor}40` }} />
        <div className="w-8 h-px" style={{ backgroundColor: `${accentColor}30` }} />
      </div>
    </div>
  );
}

/* ═══ Hero Quote (new type) ═══ */
function ImmersiveHeroQuote({
  section,
}: {
  section: { type: "hero-quote"; text: string; attribution?: string };
}) {
  return (
    <ScrollReveal mode="continuous">
      <div className="text-center py-12 md:py-16">
        <blockquote className="font-display italic text-2xl md:text-3xl text-anthracite/70 leading-relaxed max-w-2xl mx-auto px-4">
          &ldquo;{section.text}&rdquo;
        </blockquote>
        {section.attribution && (
          <cite className="block mt-4 font-body text-sm text-anthracite/35 not-italic">
            — {section.attribution}
          </cite>
        )}
      </div>
    </ScrollReveal>
  );
}

/* ═══ Data Card (new type) ═══ */
function ImmersiveDataCard({
  section,
  accentColor,
}: {
  section: { type: "data-card"; title: string; items: { label: string; value: string }[] };
  accentColor: string;
}) {
  return (
    <ScrollReveal mode="continuous">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-border p-6 md:p-8">
        <h3 className="font-display text-lg font-bold text-anthracite mb-6">{section.title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {section.items.map((item, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-2xl font-bold" style={{ color: accentColor }}>{item.value}</p>
              <p className="font-body text-xs text-anthracite/50 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ═══ Chapter Break (new type) ═══ */
function ImmersiveChapterBreak({
  section,
  accentColor,
}: {
  section: { type: "chapter-break"; number: number; title: string };
  accentColor: string;
}) {
  return (
    <ScrollReveal mode="continuous">
      <div className="max-w-2xl mx-auto flex items-baseline gap-4 py-8">
        <span className="font-display text-5xl font-bold" style={{ color: `${accentColor}20` }}>
          {String(section.number).padStart(2, "0")}
        </span>
        <div>
          <div className="w-12 h-px mb-3" style={{ backgroundColor: accentColor }} />
          <h2 className="font-display text-2xl font-bold text-anthracite">{section.title}</h2>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ═══ Timeline (new type) ═══ */
function ImmersiveTimeline({
  section,
  accentColor,
}: {
  section: { type: "timeline"; events: { year: string; text: string }[] };
  accentColor: string;
}) {
  return (
    <div className="max-w-2xl mx-auto relative pl-8 border-l-2" style={{ borderColor: `${accentColor}30` }}>
      {section.events.map((event, i) => (
        <ScrollReveal key={i} delay={i * 0.08} mode="continuous">
          <div className="relative pb-8 last:pb-0">
            <div
              className="absolute -left-[33px] top-1 w-3 h-3 rounded-full border-2 bg-creme"
              style={{ borderColor: accentColor }}
            />
            <p className="font-display text-sm font-bold mb-1" style={{ color: accentColor }}>
              {event.year}
            </p>
            <p className="font-body text-sm text-anthracite/70 leading-relaxed">{event.text}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

/* ═══ Ambient (new type) ═══ */
function ImmersiveAmbient({
  section,
}: {
  section: { type: "ambient"; theme: "forest" | "water" | "stone" | "vine" | "sky" };
}) {
  const themeColors: Record<string, string> = {
    forest: "var(--color-sapin)",
    water: "var(--color-lac)",
    stone: "var(--color-bois)",
    vine: "var(--color-or)",
    sky: "#87CEEB",
  };

  return (
    <div className="py-8 flex justify-center" aria-hidden="true">
      <div
        className="w-32 h-32 rounded-full blur-[60px] opacity-20"
        style={{ backgroundColor: themeColors[section.theme] }}
      />
    </div>
  );
}
