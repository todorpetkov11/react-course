import { useEffect, useState } from "react";

function DataLoad() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Number[]>([]);
    function loadData() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setData([1, 2, 3, 4]);
        }, 3000);
    }

    useEffect(loadData, []);

    return (
        <>
            {loading && <p>Loading...</p>}
            <pre>{JSON.stringify(data, null, " ")}</pre>
            <button onClick={loadData}>Load Data</button>
        </>
    );
}

export default DataLoad