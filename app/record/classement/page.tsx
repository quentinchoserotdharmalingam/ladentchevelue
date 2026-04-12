import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { RecordNav } from "@/components/record/RecordNav";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Trophy, Medal } from "lucide-react";
import { formatTime } from "@/lib/utils/format-time";

export const metadata: Metadata = {
  title: "Classement — Le Record",
  description:
    "Classement des Cheveuliers et Cheveuleresses qui ont releve le defi de la Dent Chevelue.",
};

// Donnees statiques en attendant Supabase
const records = [
  { nom: "Chose", temps: 113, date: "03/08/2025", phrase: "Luc Frampas merci de revenir recuperer ton record stp." },
  { nom: "Felix Bourgeois", temps: 133, date: "28/09/2025", phrase: "Du trafic au sommet !" },
  { nom: "Luc Frampas", temps: 139, date: "20/07/2025", phrase: "Ne consommer la boisson magique d'Amutha que pour ses vertus laxative" },
  { nom: "NiiiiiicoOOOoOooo", temps: 142, date: "20/07/2025", phrase: "Si vous suivez Quentin et Luc la dent du chat vous mordra jusqu'au retour" },
  { nom: "Max sportifdu88", temps: 145, date: "29/08/2025", phrase: "Intense et glissant" },
  { nom: "Julian Othenin-Girard", temps: 148, date: "15/06/2025", phrase: "Attend il faut que je reflechisse avant — c'est ce que j'aurais du faire avant de partir" },
  { nom: "Quentin Chose", temps: 151, date: "05/01/2025", phrase: "Casquette de Luigi sur la dent du chat, promis j'ai pas pris de champi magique" },
  { nom: "Hadrien Lebret", temps: 197, date: "17/02/2025", phrase: "J'avais deja l'intuition que ca ne valait pas le coup de se lever avant le soleil..." },
  { nom: "Emilie Puech", temps: 198, date: "14/12/2025", phrase: "En un mot meme : glissant" },
  { nom: "Clement Dewet", temps: 198, date: "14/12/2025", phrase: "Satisfaisant, en bonne voie" },
  { nom: "Luc Fartou", temps: 207, date: "31/12/2024", phrase: "Glissante comme la vie et fraiche comme la rosee du matin" },
  { nom: "Quentin Chose", temps: 207, date: "31/12/2024", phrase: "On peut pas tomber sur le cul si on descend deja dessus" },
  { nom: "Coco", temps: 211, date: "03/11/2025", phrase: "J'ai pas eu mal aux jambes, j'ai eu mal au cul." },
];

const sansTemps = [
  { nom: "Jean Leite", date: "31/12/2024", phrase: "" },
  { nom: "Pierre l'oiseau", date: "14/12/2025", phrase: "Decevant, petole de vent" },
  { nom: "Noemie Klein", date: "14/12/2025", phrase: "Montee sympathique, descente chaotique — ouille aie aie aie" },
];

export default function ClassementPage() {
  return (
    <>
      {/* Hero compact */}
      <section className="bg-gradient-to-br from-sapin to-lac pt-24 pb-8">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center text-white">
          <h1 className="font-display text-2xl font-bold text-white">
            Classement
          </h1>
          <p className="font-body text-sm text-white/60 mt-1">
            {records.length + sansTemps.length} temeraires
          </p>
        </div>
      </section>

      <RecordNav />
      <Breadcrumb
        items={[
          { label: "Le Record", href: "/record" },
          { label: "Classement" },
        ]}
      />

      {/* Podium top 3 */}
      <section className="bg-creme py-12">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {records.slice(0, 3).map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className={`
                    bg-white border rounded-[var(--radius-card)] p-6 text-center
                    ${i === 0 ? "border-or shadow-md sm:order-2 sm:-mt-4" : "border-border"}
                  `}
                >
                  {i === 0 ? (
                    <Trophy size={28} className="text-or mx-auto mb-2" />
                  ) : (
                    <Medal
                      size={24}
                      className={`mx-auto mb-2 ${i === 1 ? "text-anthracite/40" : "text-or/60"}`}
                    />
                  )}
                  <p className="font-body text-xs text-anthracite/40 uppercase tracking-wider">
                    #{i + 1}
                  </p>
                  <p className="font-body font-bold text-lg text-anthracite mt-1">
                    {r.nom}
                  </p>
                  <p className="font-display text-2xl font-bold text-sapin mt-1">
                    {formatTime(r.temps)}
                  </p>
                  <p className="font-body text-xs text-anthracite/40 mt-1">
                    {r.date}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h2 className="font-display text-xl font-bold text-anthracite mb-8 text-center">
            Tous les temps
          </h2>

          <div className="space-y-3">
            {records.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div className="flex items-center gap-4 p-4 bg-creme rounded-[var(--radius-card)]">
                  <span className="font-body font-bold text-sm text-anthracite/30 w-8 text-center">
                    #{i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-semibold text-sm text-anthracite">
                      {r.nom}
                    </p>
                    {r.phrase && (
                      <p className="font-display italic text-xs text-anthracite/45 mt-0.5 truncate">
                        &ldquo;{r.phrase}&rdquo;
                      </p>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-display font-bold text-lg text-sapin">
                      {formatTime(r.temps)}
                    </p>
                    <p className="font-body text-xs text-anthracite/40">
                      {r.date}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Sans temps */}
          {sansTemps.length > 0 && (
            <div className="mt-12">
              <h3 className="font-display text-lg font-bold text-anthracite mb-4 text-center">
                Ils ont releve le defi
              </h3>
              <div className="space-y-2">
                {sansTemps.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-3 bg-creme/50 rounded-lg"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-body font-medium text-sm text-anthracite/70">
                        {r.nom}
                      </p>
                      {r.phrase && (
                        <p className="font-display italic text-xs text-anthracite/40 mt-0.5">
                          &ldquo;{r.phrase}&rdquo;
                        </p>
                      )}
                    </div>
                    <p className="font-body text-xs text-anthracite/40">
                      {r.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
