import '../sass/components/footer.scss';

import Boton from './Boton';

const Footer = () => {

  const texto =  {
    texto1 : 'Email address',
    texto2: 'Get notified',
  }

  return (
    <section className="footer wrapper">
      <div className="footer__wrapper">
        <div className="footer__text">
          <h2 className='footer__title clr-secondary-thewhite'>Get notified when <span>we launch</span> </h2>
        </div>  
        <div className="boton-area">
          <Boton texto = {texto.texto1}/>
          <Boton texto = {texto.texto2}/>
        </div>
      </div>
    </section>
  )
}

export default Footer