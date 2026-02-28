import WalletConnect from "../components/WalletConnect";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img src="/banner.png" alt="NeuralSea Banner" style={{ width: "100%", maxHeight: "200px" }} />
      <img src="/logo.png" alt="NeuralSea Logo" style={{ width: "100px", marginTop: "-50px" }} />
      <h1 style={{ fontSize: "2rem", marginTop: "20px" }}>Bienvenido a NeuralSea</h1>
      <p>Marketplace NFT Multichain impulsado por IA</p>
      <WalletConnect />
    </div>
  );
}
