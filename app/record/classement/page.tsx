import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Medal } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { formatTime } from "@/lib/utils/format-time";

export const metadata: Metadata = {
  title: "Classement — Le Record",
  description:
    "Classement des Cheveuliers et Cheveuleresses qui ont releve le defi de la Dent Chevelue.",
};

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
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-sapin to-lac overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <p className="font-body text-xs uppercase tracking-widest text-white/40 mb-3">Le mur des</p>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-3">
              Cheveuliers
            </h1>
            <p className="font-body text-sm text-white/50">
              {records.length + sansTemps.length} temeraires ont releve le defi
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Podium top 3 */}
      <section className="bg-creme py-16">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-end">
            <ScrollReveal delay={0.1}>
              <PodiumCard rank={2} record={records[1]} />
            </ScrollReveal>
            <ScrollReveal delay={0}>
              <PodiumCard rank={1} record={records[0]} />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <PodiumCard rank={3} record={records[2]} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="relative pl-8 border-l-2 border-sapin/10 space-y-6">
            {records.slice(3).map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.04} direction={i % 2 === 0 ? "left" : "right"} mode="continuous">
                <div className="relative">
                  <div className="absolute -left-[33px] top-3 w-3 h-3 rounded-full bg-creme border-2 border-sapin/30" />
                  <div className="bg-creme rounded-2xl p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-body text-xs text-anthracite/30 font-bold">#{i + 4}</span>
                          <p className="font-body font-semibold text-sm text-anthracite">{r.nom}</p>
                        </div>
                        {r.phrase && (
                          <p className="font-display italic text-sm text-anthracite/50 leading-relaxed">
                            &ldquo;{r.phrase}&rdquo;
                          </p>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-display font-bold text-xl text-sapin">{formatTime(r.temps)}</p>
                        <p className="font-body text-xs text-anthracite/35">{r.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sans temps */}
      {sansTemps.length > 0 && (
        <section className="bg-creme py-12">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-display text-lg font-bold text-anthracite text-center mb-6">
                Ils ont releve le defi
              </h2>
            </ScrollReveal>
            <div className="space-y-3">
              {sansTemps.map((r, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border">
                    <div className="flex-1 min-w-0">
                      <p className="font-body font-medium text-sm text-anthracite/70">{r.nom}</p>
                      {r.phrase && (
                        <p className="font-display italic text-xs text-anthracite/40 mt-0.5">
                          &ldquo;{r.phrase}&rdquo;
                        </p>
                      )}
                    </div>
                    <p className="font-body text-xs text-anthracite/35">{r.date}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-white py-12">
        <div className="text-center">
          <Link
            href="/record/soumettre"
            className="inline-flex items-center gap-2 px-8 py-3 bg-sapin text-white rounded-full font-body font-semibold text-sm hover:bg-sapin-light transition-colors"
          >
            Soumettre mon temps
          </Link>
        </div>
      </section>
    </>
  );
}

function PodiumCard({ rank, record }: { rank: number; record: { nom: string; temps: number; date: string; phrase: string } }) {
  const isFirst = rank === 1;
  return (
    <div
      className={`relative bg-white rounded-2xl border p-6 md:p-8 text-center ${
        isFirst ? "border-or shadow-lg sm:-mt-6" : "border-border"
      }`}
    >
      {isFirst && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="w-10 h-10 rounded-full bg-or/10 flex items-center justify-center">
            <Trophy size={20} className="text-or" />
          </div>
        </div>
      )}
      {!isFirst && (
        <Medal size={20} className={`mx-auto mb-2 ${rank === 2 ? "text-anthracite/30" : "text-or/50"}`} />
      )}
      <p className="font-body text-xs text-anthracite/30 uppercase tracking-wider mt-2">#{rank}</p>
      <p className="font-display font-bold text-lg text-anthracite mt-1">{record.nom}</p>
      <p className={`font-display font-bold mt-2 ${isFirst ? "text-3xl text-or" : "text-2xl text-sapin"}`}>
        {formatTime(record.temps)}
      </p>
      <p className="font-body text-xs text-anthracite/35 mt-1">{record.date}</p>
      {record.phrase && (
        <p className="font-display italic text-xs text-anthracite/40 mt-3 leading-relaxed">
          &ldquo;{record.phrase}&rdquo;
        </p>
      )}
    </div>
  );
}
