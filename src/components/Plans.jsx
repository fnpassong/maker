 import '../sass/components/plans.scss';
import { PlanData } from './PlanData';

import figura from '../assets/icon-paid.svg';
 
 const Plans = () => {
   return (
     <section className="plans wrapper" data-width='tablet'>
        <h2 className="plans__title clr-secondary-thewhite">Our pricing plans</h2>
        <p className="plans__paragraph">
        We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.
        </p>
        <div className='container-articles'>
            {
                PlanData.map((item) => {
                    return(
                        <article key={item.id} className={`art ${item.cName} ${item.cClass}`}>
                            <code className= {`art__${item.cName}-code`}>{item.meta}</code>
                            <p className= {`art__${item.cName} ${item.cClass}`}>{item.data}</p>
                            <img className= {`art__${item.img}`} src= {item.img} alt="" />
                            <div className= {`art__${item.id}`}>
                                <div className="title__wrapper">
                                    <div className={`title art__${item.cName}-title`}>{item.title}</div>
                                    <span>{item.desp}</span>
                                </div>
                                <ul className='art__ul'>
                                    <li className='art__li'>{item.l1}</li>
                                    <li className='art__li'>{item.l2}</li>
                                    <li className='art__li'>{item.l3}</li>
                                    <li className='art__li'>{item.l4}</li>


                                    
                                </ul>
                            </div>
                        </article>
                    )
                })
            }
        </div>
     </section>
   )
 }
 
 export default Plans