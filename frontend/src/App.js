import ScansTable from "./components/ScansTable";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
  <div className="container mx-auto p-4 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg">
    <h1 className="text-2xl font-bold text-center mb-4">GAMEGRID Organizer Dashboard</h1>
    <Leaderboard />
    <ScansTable />
  </div>
</div>


  );
}

export default App;
