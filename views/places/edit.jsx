

const React = require('react')
const Def = require('../default.jsx')

const { trace } = require('../../helper');

function edit_form({ place }) {
   // trace(' | places/edit.jsx')('edit_form({place})');
   return (
      <Def>
         <main>
            <h2>Edit - {place.name}</h2>
            <form method="POST" action={`/places/${place.id}?_method=PUT`}>
               <div className='row padAll15'>
                  <div className="form-group col-sm-12">
                     <label htmlFor="name">Place Name</label>
                     <input
                        className="form-control"
                        id="name"
                        name="name"
                        defaultValue={place.name}
                        required />
                  </div>
               </div>
               <div className='row padAll15'>
                  <div className="form-group col-sm-6">
                     <label htmlFor="pic">Place Photo</label>
                     <input
                        className="form-control"
                        id="pic"
                        name="pic"
                        defaultValue={place.pic} />
                  </div>
                  <div className="form-group col-sm-6">
                     <label htmlFor="pic">Place Photo Credit</label>
                     <input
                        className="form-control"
                        id="picCredit"
                        name="picCredit"
                        defaultValue={place.picCredit} />
                  </div>
               </div>
               <div className='row padAll15'>
                  <div className="form-group col-sm-6">
                     <label htmlFor="city">City</label>
                     <input
                        className="form-control"
                        id="city"
                        name="city"
                        defaultValue={place.city} />
                  </div>
                  <div className="form-group col-sm-6">
                     <label htmlFor="state">State</label>
                     <input
                        className="form-control col-sm-6"
                        id="state"
                        name="state"
                        defaultValue={place.state} />
                  </div>
               </div>
               <div className='row padAll15'>
                  <div className="form-group col-sm-8">
                     <label htmlFor="cuisines">Cuisines</label>
                     <input
                        className="form-control col-sm-6"
                        id="cuisines"
                        name="cuisines"
                        defaultValue={place.cuisines}
                        required />
                  </div>
                  <div className="form-group col-sm-4">
                     <label htmlFor="founded">Founded Year</label>
                     <input className="form-control"
                        type="number"
                        id="founded"
                        name="founded"
                        defaultValue={place.founded} />
                  </div>
               </div>


               <div className='buttons padAll15'>
                  <input className="btn btn-primary" type="submit" value="Save" />
                  <div>
                     <a href={`/places/${place.id}`} className="btn btn-warning">
                        Cancel
                     </a>
                  </div>
               </div>
            </form>
         </main>
      </Def>
   )
}

module.exports = edit_form
