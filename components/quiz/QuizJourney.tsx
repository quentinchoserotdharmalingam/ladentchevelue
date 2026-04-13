"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mountain, RotateCcw, Share2, ChevronRight } from "lucide-react";
import { quizQuestions, type QuizQuestion } from "@/content/quiz-questions";

type Phase = "intro" | "playing" | "result";

function shuffleAndPick(arr: QuizQuestion[], count: number): QuizQuestion[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

const QUESTION_COUNT = 10;

const titles: Record<string, string> = {
  touriste: "Touriste",
  randonneur: "Randonneur",
  montagnard: "Montagnard",
  cheveulier: "Cheveulier",
};

function getTitle(score: number): string {
  if (score <= 3) return "touriste";
  if (score <= 6) return "randonneur";
  if (score <= 9) return "montagnard";
  return "cheveulier";
}

function getAltitude(score: number, total: number): number {
  return Math.round(310 + (score / total) * (1393 - 310));
}

export function QuizJourney() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const startQuiz = useCallback(() => {
    setQuestions(shuffleAndPick(quizQuestions, QUESTION_COUNT));
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowExplanation(false);
    setPhase("playing");
  }, []);

  const handleAnswer = useCallback(
    (index: number) => {
      if (selected !== null) return;
      setSelected(index);
      if (index === questions[current].correct) {
        setScore((s) => s + 1);
      }
      setShowExplanation(true);
    },
    [selected, questions, current]
  );

  const nextQuestion = useCallback(() => {
    if (current + 1 >= questions.length) {
      setPhase("result");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  }, [current, questions.length]);

  const shareResult = useCallback(() => {
    const titleKey = getTitle(score);
    const alt = getAltitude(score, questions.length);
    const text = `J'ai atteint ${alt}m sur La Dent Chevelue ! Titre : ${titles[titleKey]} (${score}/${questions.length}) 🏔️\nhttps://ladentchevelue.fr/quiz`;
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
    }
  }, [score, questions.length]);

  // Trail progress SVG
  const trailProgress = phase === "playing" ? (current + (selected !== null ? 1 : 0)) / questions.length : phase === "result" ? 1 : 0;

  return (
    <div className="min-h-[80vh] flex flex-col">
      {/* Trail progress indicator */}
      {phase !== "intro" && (
        <div className="fixed left-0 top-0 bottom-0 w-1 z-30 hidden md:block" aria-hidden="true">
          <div className="h-full bg-sapin/10 relative">
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-sapin"
              animate={{ height: `${trailProgress * 100}%` }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3"
              animate={{ bottom: `${trailProgress * 100}%` }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Mountain size={12} className="text-sapin" />
            </motion.div>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {phase === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex items-center justify-center px-6"
          >
            <div className="text-center max-w-md">
              <Mountain size={48} className="text-sapin/40 mx-auto mb-6" />
              <h1 className="font-display text-3xl font-bold text-anthracite mb-3">
                Le Sentier des Questions
              </h1>
              <p className="font-body text-sm text-anthracite/60 mb-2">
                {QUESTION_COUNT} questions · Du lac au sommet
              </p>
              <p className="font-body text-xs text-anthracite/40 mb-8">
                Chaque bonne reponse vous rapproche du sommet de la Dent du Chat
              </p>
              <button
                onClick={startQuiz}
                className="px-8 py-3 bg-sapin text-white rounded-full font-body font-semibold text-sm hover:bg-sapin-light transition-colors"
              >
                Commencer l&apos;ascension
              </button>
            </div>
          </motion.div>
        )}

        {phase === "playing" && questions[current] && (
          <motion.div
            key={`q-${current}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex items-center justify-center px-6 py-12"
          >
            <div className="max-w-xl w-full">
              {/* Progress */}
              <div className="flex items-center justify-between mb-8">
                <p className="font-body text-xs text-anthracite/40">
                  Question {current + 1}/{questions.length}
                </p>
                <p className="font-body text-xs text-sapin font-semibold">
                  {getAltitude(score, questions.length)} m
                </p>
              </div>

              {/* Question */}
              <h2 className="font-display text-xl md:text-2xl font-bold text-anthracite mb-8 leading-snug">
                {questions[current].question}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {questions[current].options.map((option, i) => {
                  const isSelected = selected === i;
                  const isCorrect = i === questions[current].correct;
                  const showResult = selected !== null;

                  let bg = "bg-white hover:bg-creme border-border";
                  if (showResult) {
                    if (isCorrect) bg = "bg-sapin/10 border-sapin/30";
                    else if (isSelected) bg = "bg-red-50 border-red-200";
                    else bg = "bg-white border-border opacity-50";
                  }

                  return (
                    <motion.button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      disabled={selected !== null}
                      className={`w-full text-left p-4 rounded-xl border transition-all font-body text-sm ${bg}`}
                      whileTap={selected === null ? { scale: 0.98 } : {}}
                      animate={isSelected && !isCorrect ? { x: [0, -8, 8, -4, 4, 0] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      {option}
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-creme rounded-xl"
                  >
                    <p className="font-body text-sm text-anthracite/70 leading-relaxed">
                      {questions[current].explanation}
                    </p>
                    <button
                      onClick={nextQuestion}
                      className="mt-4 flex items-center gap-1.5 text-sapin font-body text-sm font-semibold hover:gap-2.5 transition-all"
                    >
                      {current + 1 < questions.length ? "Question suivante" : "Voir le resultat"}
                      <ChevronRight size={14} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {phase === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex items-center justify-center px-6 py-12"
          >
            <div className="text-center max-w-md">
              <p className="font-body text-xs text-anthracite/40 mb-2">Altitude atteinte</p>
              <p className="font-display text-5xl font-bold text-sapin mb-2">
                {getAltitude(score, questions.length)} m
              </p>
              <p className="font-display text-xl font-bold text-anthracite mb-1">
                {titles[getTitle(score)]}
              </p>
              <p className="font-body text-sm text-anthracite/50 mb-8">
                {score}/{questions.length} bonnes reponses
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={startQuiz}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-sapin text-white rounded-full font-body text-sm font-semibold hover:bg-sapin-light transition-colors"
                >
                  <RotateCcw size={14} />
                  Recommencer
                </button>
                <button
                  onClick={shareResult}
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-sapin text-sapin rounded-full font-body text-sm font-semibold hover:bg-sapin hover:text-white transition-colors"
                >
                  <Share2 size={14} />
                  Partager
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
