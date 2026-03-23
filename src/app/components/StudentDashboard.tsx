import { useEffect, useState } from "react"
import Editor from "@monaco-editor/react"

export function StudentDashboard() {

  const [round, setRound] = useState<number | null>(null)
  const [questions, setQuestions] = useState<any[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<any>({})
  const [language, setLanguage] = useState("python")
  const [code, setCode] = useState("// write code here")
  const [output, setOutput] = useState("")
  const [allQuestions, setAllQuestions] = useState<any>(null)

  // ⭐ LOAD QUESTIONS JSON ONLY ONCE
  useEffect(() => {
    fetch("/questions.json")
      .then(res => res.json())
      .then(data => setAllQuestions(data))
  }, [])

  // ⭐ ROUND POLLING
  useEffect(() => {

    const interval = setInterval(() => {

      fetch("http://localhost:5000/contest/state")
        .then(res => res.json())
        .then(data => {

          setRound(data.active_round)

          if (!allQuestions) return

          // ⭐ LOAD ROUND QUESTIONS
          if (data.active_round === 1) setQuestions(allQuestions.round1)
          if (data.active_round === 2) setQuestions(allQuestions.round2)
          if (data.active_round === 3) setQuestions(allQuestions.round3)
          if (data.active_round === 4) setQuestions(allQuestions.round4)

          // ⭐ RESET QUESTION INDEX WHEN ROUND CHANGES
          setCurrentQ(0)

        })

    }, 2000)

    return () => clearInterval(interval)

  }, [allQuestions])


  // ⭐ MOCK RUN CODE
  const runCode = () => {
    setOutput("Running...")
    setTimeout(() => {
      setOutput("Sample Output ✅")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white p-8">

      <h1 className="text-3xl font-bold mb-6">
        Student Contest Dashboard
      </h1>

      <h2 className="text-xl mb-6 text-blue-400">
        {round
          ? `Round ${round} started !!`
          : "Round not started yet , wait for CodeNex Club admin to start the round !!"}
      </h2>

      {/* ⭐ ROUND 1 MCQ */}
      {
        round === 1 && questions.length > 0 && (

          <div className="bg-[#111827] p-6 rounded-xl max-w-3xl">

            <p className="text-lg mb-4">
              Q{currentQ + 1}. {questions[currentQ].q}
            </p>

            {
              questions[currentQ].options.map((op: any, i: number) => (
                <button
                  key={i}
                  onClick={() => setAnswers({ ...answers, [currentQ]: i })}
                  className="block w-full text-left border p-3 mb-2 rounded hover:bg-blue-600"
                >
                  {op}
                </button>
              ))
            }

            <button
              onClick={() => {
                if (currentQ < questions.length - 1)
                  setCurrentQ(currentQ + 1)
              }}
              className="mt-4 px-6 py-2 bg-blue-600 rounded"
            >
              Next Question
            </button>

          </div>

        )
      }

      {/* ⭐ CODING ROUNDS */}
      {
        round !== 1 && round !== null && questions.length > 0 && (

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-[#111827] p-4 rounded-xl">

              <h3 className="text-xl mb-3">
                Problem {currentQ + 1}
              </h3>

              <pre className="text-gray-300 whitespace-pre-wrap">
                {questions[currentQ].description ||
                  questions[currentQ].buggy_code ||
                  questions[currentQ].title}
              </pre>

              <button
                onClick={() => {
                  if (currentQ < questions.length - 1)
                    setCurrentQ(currentQ + 1)
                }}
                className="mt-4 px-6 py-2 bg-blue-600 rounded"
              >
                Next Problem
              </button>

            </div>

            <div>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="mb-3 bg-gray-800 p-2 rounded"
              >
                <option value="python">Python</option>
                <option value="cpp">C++</option>
                <option value="java">Java</option>
              </select>

              <Editor
                height="400px"
                theme="vs-dark"
                language={language}
                value={code}
                onChange={(v) => setCode(v || "")}
              />

              <button
                onClick={runCode}
                className="mt-3 px-6 py-2 bg-green-600 rounded"
              >
                Run Code
              </button>

              <div className="mt-3 bg-black p-3 rounded">
                Output: {output}
              </div>

            </div>

          </div>

        )
      }

    </div>
  )
}