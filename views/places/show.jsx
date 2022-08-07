

const React = require('react')
const Def = require('../default')

const { trace } = require('../../helper');

function show({ place }) {
   // trace(' | places/show.jsx')('show({place})');

   let comments = (
      <p className="inactive">
         No comments yet
      </p>
   )
   let rating = (
      <p className='inactive'>
         Not rated yet
      </p>
   )

   let stars = '';

   if (place.comments.length > 0) {
      const sumRatings = place.comments.reduce((tot, c) => {
         return tot + c.stars
      }, 0)
      const averageRating = Math.round(sumRatings / place.comments.length);

      for (let i = 0; i < averageRating; i++) {
         stars += '&#11088;&nbsp;'
      }
      rating = (
         <p>
            <span dangerouslySetInnerHTML={{ __html: stars }} />
         </p>
      )
      comments = place.comments.map(c => {
         return (
            <div key={c.id} className="border rounded padAll10 comment">
               <h5 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h5>
               <p>{c.content}</p>
               <h5>
                  <strong>- {c.author}</strong>
               </h5>
               <h6>Rating: {c.stars}</h6>

               <form method="POST" action={`/places/${place.id}/rant/${c.id}?_method=DELETE`}>
                  <input type="submit" className="btn btn-danger" value="Delete Comment" />
               </form>

            </div>
         )
      })
   }
   { console.log(rating) }
   return (
      <Def>
         <main>
            <div className='row textAlignCenter'>
               <div className="form-group col-sm-12">
                  <h2 >
                     {place.name}
                  </h2>
                  <hr className='marginSides10' />
               </div>
            </div>
            <div className='row textAlignCenter'>
               <div className="form-group col-sm-1"></div>
               <div className="form-group col-sm-6 padAll15">
                  <div className='banner'>
                     <img src={place.pic} alt={place.name}></img>
                     <span><sup>{place.picCredit}</sup></span>
                  </div>
                  <p><strong>Located in {place.city}, {place.state}</strong></p>
               </div>
               <div className="form-group col-sm-4 padAll15">
                  <div className='marginBottom30'>
                     <h4>Rating</h4>
                     <p className="text-center">
                        {rating}
                     </p>
                  </div>
                  <div className='marginBottom30'>
                     <h4>Description</h4>
                     <p>
                        {place.showEstablished()}
                     </p>
                  </div>
                  <div>
                     <h4>Serving</h4>
                     <p>
                        {place.cuisines}
                     </p>
                  </div>
                  <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                     <div className='buttons'> <div>
                        <a href={`/places/${place.id}/edit`} className="btn btn-warning">Edit</a>
                     </div>
                        <button type="submit" className="btn btn-danger marginLeft20">
                           Delete
                        </button>
                     </div>
                  </form>
               </div>
               <div className="form-group col-sm-1"></div>
            </div>
            <div className='form-group col-sm-12 padAll10 clearfix'>
               <h4>Comments:</h4>
               {comments}
            </div>
            <hr className='marginSides10' />
            <h4>Add Your Own Rant or Rave</h4>
            <form method="POST" action={`/places/${place.id}/rant`}>

               <div className='row padAll15'>
                  <div className="form-group col-sm-12">
                     <label htmlFor="author">Author</label>
                     <input className="form-control"
                        id="author"
                        name="author"
                        type="text"
                        maxLength={50} />
                  </div>

               </div>
               <div className='row padAll15'>
                  <div className="form-group col-sm-12">
                     <label htmlFor="content">Comment (maximum 150 characters)</label>
                     <input className="form-control"
                        id="content"
                        name="content"
                        type='textarea'
                        maxLength={150}
                        rows={3} />
                  </div>
               </div>
               <div className='row padAll15'>
                  <div className="form-group col-sm-8">
                     <label htmlFor="stars">Stars (between 1 and 5)</label>
                     <input className="form-range"
                        id="stars"
                        name="stars"
                        type="range"
                        min={1}
                        max={5}
                        step={0.5} />
                  </div>
                  <div className="form-group col-sm-4">
                     <label htmlFor="rant">Rant?&nbsp;</label><br />
                     <input
                        id="rant"
                        name="rant"
                        type="checkbox"
                        defaultChecked={false} />
                  </div>
               </div>
               <div className='buttons padAll15'>
                  <input className="btn btn-primary" type="submit" value="Add" />
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

module.exports = show

