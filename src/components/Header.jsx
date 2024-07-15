import logo from '../assets/logo.svg';
import scroll from '../assets/icon-scroll.svg';

import '../sass/components/header.scss'

const Header = () => {
  return (
    <section className='main'>
        <div className="main__wrapper">
            <div className="logo"><img src={ logo } alt="" /></div>
            <div className="main__many-parts">
                <div className="main__images">
                    <div className="main__img"></div>
                    <div className="main__right"></div>
                    <div className="main__text-area wrapper">
                    <h2 className="main__title">Get paid for the work you <span>love</span> to do.</h2>
                    <p className="main__paragraph">The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.</p>
                    <img className='main__scroll' src={ scroll } alt="" />
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header;