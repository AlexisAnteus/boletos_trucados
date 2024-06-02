import QRCode from "react-qr-code";

function Success() {
  return (
    <div>
      <h1 className="mt-3">Gracias Por Su Compra!</h1>
      <h2 className="mt-5">Lo esperamos!</h2>
      <h3><QRCode value="https://alphacon.com.mx/"/></h3>
      <a href="/" className="btn btn-success mt-3">
        Volver al Inicio
      </a>
    </div>
  );
}

export default Success;
