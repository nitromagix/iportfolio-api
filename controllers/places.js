const router = require('express').Router()
const db = require('../models')

const Places_Seed = require('../models/data/places_seed')
const Comments_Seed = require('../models/data/comments_seed')

const {
   trace,
   stub
} = require('../helper');

// SEED PLACES

router.get('/data/seedPlaces', async (req, res) => {
   const params = req.params;
   trace('/data/seedPlaces (GET)')(params);
   const places = Places_Seed;
   await db.Place.insertMany(places);
   res.redirect('/places');
})

router.post('/', async (req, res) => {
   // const route = '/places (POST)';
   // trace(route)(req.body);

   if (!req.body.pic) {
      req.body.pic = undefined
   }

   try {
      const newPlace = await db.Place.create(req.body);
      res.redirect('/places');
   } catch (err) {
      trace(err.name)(err);
      if (err && err.name == 'ValidationError') {
         let message = ''
         for (let field in err.errors) {
            message += `${field} was ${err.errors[field].value}. `
            message += `${err.errors[field].message}`
         }
         const body = req.body;
         res.render('places/new', {
            message,
            body
         })
      } else {
         res.render('error404')
      }
   }

});

// RETRIEVE - NEW

router.get('/new', async (req, res) => {
   // const route = '/places/new (GET)';
   // trace(route)('');

   // res.send(stub(route))
   res.render('places/new.jsx')
});

// RETRIEVE - SHOW

router.get('/:id', async (req, res) => {
   // const route = '/places/:id (GET)';
   const id = req.params.id
   // trace(route)(id);

   const foundPlace = await db.Place
      .findById(id)
      .populate('comments');
   // trace('comments')(foundPlace.comments)
   res.render('places/show', {
      place: foundPlace
   });
});

// RETRIEVE - INDEX

router.get('/', async (req, res) => {
   // const route = '/places (GET)';
   // trace(route)('');

   const places = await db.Place.find();
   res.render('places/index', {
      places
   });
});

// RETRIEVE - EDIT

router.get('/:id/edit', async (req, res) => {
   // const route = '/places/:id/edit (GET)';
   const id = req.params.id
   // trace(route)(id);

   const foundPlace = await db.Place.findById(id);
   res.render('places/edit', {
      place: foundPlace
   })
});

// UPDATE

router.put('/:id', async (req, res) => {
   // const route = '/places/:id (PUT)';
   const id = req.params.id
   const body = req.body;
   // trace(route)(id);

   if (!body.pic) {
      body.pic = undefined
   }
   if (!body.city) {
      body.city = 'Anytown'
   }
   if (!body.state) {
      body.state = 'USA'
   }

   const updatedPlace = await db.Place.findByIdAndUpdate(id, body, {
      new: true
   });
   res.redirect(`/places/${id}`)

});

// DELETE (PLACE)

router.delete('/:id', async (req, res) => {
   // const route = '/places/:id (DELETE)';
   const id = req.params.id
   // trace(route)(id);

   const deletedPlace = await db.Place.findByIdAndDelete(id);
   res.status(303).redirect('/places')
});

// CREATE - NEW (RANT)

router.post('/:id/rant', async (req, res) => {
   // const route = '/places/:id/rant (POST)';
   const id = req.params.id;
   const body = req.body;

   // trace(route)(id);

   body.rant = body.rant ? true : false;
   const foundPlace = await db.Place.findById(id);
   const newComment = await db.Comment.create(body);
   foundPlace.comments.push(newComment.id);
   const savedPlace = await foundPlace.save();
   res.redirect(`/places/${id}`);

});

// DELETE (RANT)

router.delete('/:id/rant/:rantId', async (req, res) => {
   // const route = '/places/:id/rant/:rantId (DELETE)';
   const id = req.params.id;
   const rantId = req.params.rantId;
   // trace(route)(`id: ${id}, rantId:${rantId}`);

   const deletedComment = await db.Comment.findByIdAndDelete(rantId);
   res.status(303).redirect(`/places/${id}`)
});

module.exports = router