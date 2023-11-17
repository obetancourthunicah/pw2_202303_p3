export const Asignatura = ({ asignatura }) => {
    return (
        <section className="bg-gray-200 p-4 self-center w-36">
            <h3 className="text-2xl font-bold">{asignatura.clacod} ({asignatura.Creditos})</h3>
            <p className="text-gray-700">{asignatura.clanom}</p>
        </section>
    )
}