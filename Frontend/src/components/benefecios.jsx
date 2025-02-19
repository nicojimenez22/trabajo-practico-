import React from "react";
import { FaShippingFast, FaLock, FaTags, FaMobileAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const BeneficiosEcommerce = () => {
  const beneficios = [
    {
      id: 1,
      icono: <FaShippingFast size={20} className="text-primary" />,
      titulo: "Envíos Rápidos",
      descripcion: "Recibe tus productos en tiempo récord con nuestras entregas express.",
    },
    {
      id: 2,
      icono: <FaLock size={20} className="text-success" />,
      titulo: "Pagos Seguros",
      descripcion: "Tus datos están protegidos con tecnología de cifrado avanzada.",
    },
    {
      id: 3,
      icono: <FaTags size={20} className="text-warning" />,
      titulo: "Ofertas Exclusivas",
      descripcion: "Accede a descuentos y promociones únicas por comprar en línea.",
    },
    {
      id: 4,
      icono: <FaMobileAlt size={20} className="text-danger" />,
      titulo: "Compra Fácil",
      descripcion: "Realiza tus pedidos desde cualquier dispositivo.",
    },
  ];

  return (
    <div  className="container text-center mt-4">
      <div  className="row justify-content-center">
        {beneficios.map((beneficio) => (
          <div  key={beneficio.id} className="col-12 col-sm-6 col-md-3 mb-3">
            <div  className="card p-2 shadow-sm border-0 rounded-2 small-card">
              <div  className="mb-2">{beneficio.icono}</div>
              <h6  className="fw-bold">{beneficio.titulo}</h6>
              <p  className="text-muted small">{beneficio.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Estilos personalizados para reducir tamaño */}
      <style>{`
        .small-card {
          font-size: 14px;
          padding: 10px;
        }
        .small-card:hover {
          transform: scale(1.03);
          transition: 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default BeneficiosEcommerce;
