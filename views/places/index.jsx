
const React = require('react');
const Default = require('../default');

const { trace } = require('../../helper');

function index({ places }) {

   // trace(' | places/index.jsx')('index({places})');
   
   const placesFormatted = places.map((place, index) => {
      return (
         <div key={place.id} className="col-sm-6 place">
            <h2>
               <a href={`/places/${place.id}`} >
                  {place.name}
               </a>
            </h2>
            <p className="text-center">
               {place.cuisines}
            </p>
            <div className='banner'>
               <img src={place.pic} alt={place.name}></img>
               <span><sup>{place.picCredit}</sup></span>
            </div>
            <p className="text-center">
               Located in {place.city}, {place.state}
            </p>
         </div>
      )
   })

   return (
      <Default>
         <main>
            <h2>PLACES</h2>
            <div className='row'>
               {placesFormatted}
            </div>
         </main>
      </Default>
   )
}



module.exports = index;
