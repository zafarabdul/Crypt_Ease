export default function Section_0() {
    const dv={
        width:"100vw",
        height:"7vh",
        alignItem: "center",
        textAlign: "center",
        margin: "8vh auto",
    }
    const st = {
        fontWeight: "1000",
        background: "linear-gradient(90deg,rgba(0, 240, 255, 1) 29%, rgba(255, 0, 255, 1) 69%)",
        WebkitBackgroundClip: "text",
        color:"transparent",
        marginBottom:"-10px",
    }
    return (
        <div style={dv}>
            <h1 style={st}>Lock Your Data Securely</h1>
            <p>Encrypt and decrypt.</p>
        </div>
    )
    
}