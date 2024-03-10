import React from "react";

import DisnyeyLogo from "../../../assets/svg/disneyLogo";

const Footer = () => {
  return(
    <footer className="footer">
      <div>
        <DisnyeyLogo width="94" height="38" />
      </div>
      <div>
        <span>Política de privacidad</span>
        <span>Complemento Política de privacidad</span>
        <span>Acuerdo de suscripción</span>
        <span>Ayuda</span>
        <span>Dispositivos compatibles</span>
        <span>Acerca de Disney+</span>
        <span>Publicidad personalizada</span>
        <div>
          Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad. El servicio Disney+ es comercializado por The Walt Disney Company Colombia S.A., Calle 70 Bis No. 4 – 41, Bogotá D.C., Colombia, y el número de NIT es 800.236.937-1.
        </div>
      </div>
      <div>
        © Disney. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer;