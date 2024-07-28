import Advertisement from "../components/advertisement";
import SeasonClans from "../components/seasonClans";
export default function Home() {
    return (
        <>
            <div className="container mx-auto">
                <Advertisement></Advertisement>
                <SeasonClans></SeasonClans>
            </div>
        </>
    );
}
