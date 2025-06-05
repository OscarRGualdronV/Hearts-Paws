import { useEffect, useState } from "react";

export default function PingPage() {
    const [ message, setMessage] = useState("Verificando conexión...");

    useEffect(() => {
        const fetchPing = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ping`)
                const data = await res.json();
                setMessage(data.message || "Respuesta no valida")
            } catch (error) {
                return setMessage("Error al conectar con el backend"), error
                
            }
        };

        fetchPing();


    }, []);

return (
<div style={{ padding: '2rem' }}>
<h1>Respuesta desde el backend:</h1>
<p>{message}</p>
</div>
);
}
