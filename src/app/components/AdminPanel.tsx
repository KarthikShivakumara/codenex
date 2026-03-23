import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Play, Square, Trophy, LogOut } from "lucide-react";

export function AdminPanel() {

  const navigate = useNavigate();
  const [activeRound,setActiveRound] = useState<number | null>(null);

  useEffect(()=>{
    const auth = localStorage.getItem("adminAuth");
    if(!auth) navigate("/admin-login");
  },[]);

  const startRound = async (round:number)=>{

    await fetch("http://localhost:5000/contest/start-round",{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body: JSON.stringify({ round })
    });

    setActiveRound(round);
  };

  const endRound = async ()=>{

    await fetch("http://localhost:5000/contest/end-round",{
      method:"POST"
    });

    setActiveRound(null);
  };

  const logout = ()=>{
    localStorage.removeItem("adminAuth");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white p-10">

      <div className="flex justify-between mb-10">
        <h1 className="text-4xl font-bold">Admin Contest Control</h1>

        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 rounded"
        >
          <LogOut/> Logout
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6">

        {[1,2,3,4].map(r=>(
          <motion.button
            key={r}
            onClick={()=>startRound(r)}
            className={`p-6 rounded-xl text-xl ${
              activeRound===r
                ? "bg-green-600"
                : "bg-blue-600"
            }`}
            whileHover={{scale:1.05}}
          >
            <Play className="inline mr-2"/>
            Round {r}
          </motion.button>
        ))}

        <motion.button
          onClick={endRound}
          className="p-6 rounded-xl text-xl bg-red-600"
          whileHover={{scale:1.05}}
        >
          <Square className="inline mr-2"/>
          End Round
        </motion.button>

      </div>

    </div>
  );
}