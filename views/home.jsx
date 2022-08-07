

const React = require('react');
const Def = require('./default');

const { trace } = require('../helper');

function home() {
   return (
      <Def>
         <main>
            <h2>Welcome to REST-Rant</h2>
            <div className='banner padAll15'>
               <img src='/images/ella-olsson-2IxTgsgFi-unsplash.jpg' alt='Some tasty food to rant about!' />
               <span><sup>Photo by <a href="https://unsplash.com/@ellaolsson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ella Olsson</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
               </sup></span>
            </div>

         </main>
      </Def>
   )
}


module.exports = home
