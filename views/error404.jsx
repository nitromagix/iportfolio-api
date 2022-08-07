

const React = require('react');
const { trace } = require('../helper');
const Def = require('./default');

function error404({ params }) {
   // trace(' | error404.jsx')('error404({ params })')
   // trace(' | params')(params);
   return (
      <Def>
         <main>
            <div className="text-center">
               <h2>404: PAGE NOT FOUND</h2>
               <p>Sorry, the resource could not be found.</p>
               <div className='banner padAll15'>
                  <img src='/images/becca-tapert-GnY_mW1Q6Xc-unsplash.jpg' alt='Resource could not be found' />
                  <span><sup>Photo by <a href="https://unsplash.com/@beccatapert?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Becca Tapert</a> on <a href="https://unsplash.com/s/photos/free-find?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </sup></span>
               </div>
            </div>
         </main>
      </Def>
   )
}


module.exports = error404
