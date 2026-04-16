import { HeroCompact } from "./HeroCompact";
import { CategoryGridHub } from "./CategoryGridHub";
import { HighlightStrip } from "./HighlightStrip";
import { FeaturedCards } from "./FeaturedCards";
import { FunFactCinematic } from "./FunFactCinematic";

export function HubHomepage() {
  return (
    <div>
      <HeroCompact />
      <CategoryGridHub />
      <HighlightStrip />
      <FeaturedCards />
      <FunFactCinematic />
    </div>
  );
}
