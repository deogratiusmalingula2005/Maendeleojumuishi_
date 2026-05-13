import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  topic: string;
}

export const Quiz = ({ questions, topic }: QuizProps) => {
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [score, setScore] = useState<number | null>(null);
  const [persistedScore, setPersistedScore] = useState<number | null>(null);

  useEffect(() => {
    // Check if user has already taken this quiz
    const savedResults = JSON.parse(localStorage.getItem('quiz_results') || '{}');
    if (savedResults.hasOwnProperty(topic)) {
      setPersistedScore(savedResults[topic]);
    }
  }, [topic]);

  const handleSubmit = () => {
    let correct = 0;
    answers.forEach((ans, index) => {
      if (ans === questions[index].correctAnswer) correct++;
    });
    const finalScore = (correct / questions.length) * 100;
    setScore(finalScore);

    const savedResults = JSON.parse(localStorage.getItem('quiz_results') || '{}');
    savedResults[topic] = finalScore;
    localStorage.setItem('quiz_results', JSON.stringify(savedResults));
    setPersistedScore(finalScore);
  };

  const getOptionLabel = (index: number) => String.fromCharCode(65 + index);

  return (
    <div className="mt-12 bg-black/60 p-8 rounded-3xl border border-yellow-500/30 text-white shadow-[0_0_30px_rgba(234,179,8,0.1)]">
      <h3 className="text-2xl font-bold mb-8 text-yellow-400 border-b border-yellow-500/30 pb-4">Jaribio: {topic}</h3>
      {persistedScore !== null ? (
        <div className="text-center p-8 bg-zinc-900 border border-emerald-500/30 rounded-3xl">
            <h4 className="text-2xl mb-4 font-bold text-emerald-400">Tayari umeshawasilisha jaribio hili!</h4>
            <p className="text-xl font-bold mb-6 text-zinc-300">Alama zako zilizohifadhiwa: {persistedScore}%</p>
        </div>
      ) : score === null ? (
        <>
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="mb-8">
              <p className="font-bold mb-4 text-lg">{qIndex + 1}. {q.question}</p>
              {q.options.map((opt, oIndex) => (
                <button
                  key={oIndex}
                  className={`block w-full text-left p-4 mb-3 rounded-xl transition-all font-medium ${answers[qIndex] === oIndex ? 'bg-yellow-600/80 text-white' : 'bg-black/40 hover:bg-black/60 border border-yellow-500/20'}`}
                  onClick={() => {
                      const newAnswers = [...answers];
                      newAnswers[qIndex] = oIndex;
                      setAnswers(newAnswers);
                  }}
                >
                  <span className="font-bold mr-3 text-yellow-400">{getOptionLabel(oIndex)}.</span> {opt}
                </button>
              ))}
            </div>
          ))}
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20" onClick={handleSubmit}>Wasilisha Majibu</button>
        </>
      ) : (
        <div className="space-y-8">
            <div className="text-center p-6 bg-emerald-950/50 rounded-2xl border border-emerald-500/30">
                <h4 className="text-2xl mb-2 font-bold text-emerald-300">Matokeo Yako</h4>
                <p className="text-5xl font-black text-yellow-400">{score}%</p>
            </div>
            
            {questions.map((q, qIndex) => {
                const isCorrect = answers[qIndex] === q.correctAnswer;
                return (
                    <div key={qIndex} className={`p-6 rounded-2xl border ${isCorrect ? 'bg-green-950/30 border-green-500/50' : 'bg-red-950/30 border-red-500/50'}`}>
                        <p className="font-bold mb-4">{qIndex + 1}. {q.question}</p>
                        <p className="text-sm font-semibold">Jibu Lako: <span className={isCorrect ? 'text-green-400' : 'text-red-400'}>{q.options[answers[qIndex]]}</span></p>
                        {!isCorrect && <p className="text-sm font-semibold text-green-400">Jibu Sahihi: {q.options[q.correctAnswer]}</p>}
                    </div>
                );
            })}

            {score >= 70 ? (
                <div className="p-8 bg-zinc-900 border border-emerald-500/30 rounded-3xl text-center">
                    <h4 className="text-2xl mb-4 font-bold text-emerald-400">Hongera! Umefuzu.</h4>
                    <p className="text-zinc-300">Hongera kwa kushiriki kikamilifu katika ujenzi wa zama hizi mpya za maendeleo jumuishi.</p>
                </div>
            ) : (
                <div className="text-center p-8 bg-zinc-900 rounded-3xl border border-zinc-700">
                    <p className="text-xl font-bold mb-6 text-zinc-300">Pole, hujafikisha alama 70%. Jaribu tena!</p>
                </div>
            )}
        </div>
      )}
    </div>
  );
};
