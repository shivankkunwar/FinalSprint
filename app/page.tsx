import ProblemPage from "@/page/ProblemPage";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar/>
      <ProblemPage/>
    </div>
  );
}
