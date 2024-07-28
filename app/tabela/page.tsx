import Table_Season from "../components/table_season"

export default function Tabela() {
    return (
        <>
            <div className="container py-5 mx-auto">
                <Table_Season season={"season4"}></Table_Season>
                <Table_Season season={"season3"}></Table_Season>
                <Table_Season season={"season2"}></Table_Season>
                <Table_Season season={"season1"}></Table_Season>
                <Table_Season season={"season0"}></Table_Season>
            </div>
        </>
    );
}
