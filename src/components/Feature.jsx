import { FeatureData } from './FeatureData';

import '../sass/components/feature.scss';

const Feature = () => {
  return (
    <section className="feature">

      <div className="card-container wrapper" data-width='tablet'>
        {
          FeatureData.map((data)=> {
            return(
              <div key={data.id} className= 'card'>
                <div className="card__content">
                  <img src={data.img} alt="" />
                  <div className="card__text">
                    <h2 className="card__title">{data.title}</h2>
                    <p className="card__paragraph">{data.paragraph}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
        
    </section>
  )
}

export default Feature