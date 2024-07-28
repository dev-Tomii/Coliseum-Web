import TableSeason from "@/components/tableseason"

export default function Tabela() {
    return (
        <>
            <div className="container py-5 mx-auto">
                <TableSeason season={"season4"}></TableSeason>
                <TableSeason season={"season3"}></TableSeason>
                <TableSeason season={"season2"}></TableSeason>
                <TableSeason season={"season1"}></TableSeason>
                <TableSeason season={"season0"}></TableSeason>
            </div>
        </>
    );
}
