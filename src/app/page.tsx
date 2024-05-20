import Image from "next/image";
import Navegation from "@/components/navegation";
import Advertisement from "@/components/advertisement";
import SeasonClans from "@/components/seasonClans";
import './page.css'
export default function Home() {
  return (
    <>
      <Navegation></Navegation>
      <div className="container mx-auto">
        <Advertisement></Advertisement>
        <SeasonClans></SeasonClans>
      </div>
    </>
    );
}
