

const React = require('react');
const Def = require('../default');

const { trace } = require('../../helper');


function newPlace({ message, body }) {
   // trace(' | places/new.jsx')('newPlace()');
   let displayMessage = ''
   if (message) {
      displayMessage = (
         <div className='error'>
            <h4 >
               Validation Error:
            </h4>
            <p>
               {message}
            </p>
         </div>
      )
   }

   return (
      <Def>
         <main>
            <h2>Add a New Place</h2>
            {displayMessage}
            <form method="POST" action="/places">
               <div className='row padAll15'>
                  <div className="form-group col-sm-12">
                     <label htmlFor="name">Place Name</label>
                     <input className="form-control"
                        id="name"
                        name="name"
                        required
                        defaultValue={body ? body.name : ''} />
                  </div>

               </div>
               <div className='row padAll15'>
                  <div className="form-group col-sm-6">
                     <label htmlFor="pic">Place Photo</label>
                     <input
                        className="form-control"
                        id="pic"
                        name="pic"
                        defaultValue={body ? body.pic : ''} />
                  </div>
                  <div className="form-group col-sm-6">
                     <label htmlFor="pic">Place Photo Credit</label>
                     <input
                        className="form-control"
                        id="picCredit"
                        name="picCredit"
                        defaultValue={body ? body.picCredit : ''} />
                  </div>
               </div>
               <div className='row padAll15'>
                  <div className="form-group col-sm-6">
                     <label htmlFor="city">City</label>
                     <input className="form-control"
                        id="city"
                        name="city"
                        defaultValue={body ? body.city : ''} />

                  </div>
                  <div className="form-group col-sm-6">
                     <label htmlFor="state">State</label>
                     <input className="form-control"
                        id="state"
                        name="state"
                        defaultValue={body ? body.state : ''} />
                  </div>
               </div>
               <div className='row padAll15'>
                  <div className="form-group col-sm-8">
                     <label htmlFor="cuisines">Cuisines</label>
                     <input className="form-control"
                        id="cuisines"
                        name="cuisines"
                        required
                        defaultValue={body ? body.cuisines : ''} />
                  </div>

                  <div className="form-group col-sm-4">
                     <label htmlFor="founded">Founded Year</label>
                     <input className="form-control"
                        type="number"
                        id="founded"
                        name="founded"
                        defaultValue={body ? body.founded : (new Date().getFullYear())} />
                  </div>
               </div>
               <div className='buttons padAll15'>
                  <input className="btn btn-primary" type="submit" value="Add Place" />
                  <div>
                     <a href={`/places`} className="btn btn-warning">
                        Cancel
                     </a>
                  </div>
               </div>
            </form>



         </main>
      </Def>
   )
}


module.exports = newPlace
