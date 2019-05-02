const mongoose = require('mongoose');
const slug = require('slugs');
mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Please enter the post title!' // we can define the error message that will be shown
  },
  slug: String,
  excerpt: {
    type: String,
    trim: true
  },
  content: {
    type: String,
    trim: true
  },
  tags: [String], // this means it will be an Array of Strings
  created: {
    type: Date,
    default: Date.now
  },
  photo: String
})

// This is a pre hook to autogenerate a slug before saving the post on the db.
// It needs to have a common function, not an arrow one, because the 'this' keyword
// will be the post that we're going to save.
postSchema.pre('save', async function(next) {
  if(!this.isModified('title')){
    next(); // we just need to create a new slug if the title was actually changed or if it's new. If not, we skip it.
    return;
  }
  this.slug = slug(this.title); // this is creating a slug property using the title of the post

  // Find other posts with the same title
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i'); // we're going to search for a slug that starts with our slug and ends with -number.
  const postsWithSlug = await this.constructor.find({ slug: slugRegEx }) // this.constructor is a way to access mongo before we finish our Schema
  
  if(postsWithSlug.length) {
    this.slug = `${this.slug}-${postsWithSlug.length - 1}`
  }

  next();
})

postSchema.statics.getTagsList = function () {
  return this.aggregate([
    { $unwind: '$tags' }, // Here we're just saying that 'tags' is a field on my document that I want to unwind
    { $group: // now we're grouping the results
      { 
        _id: '$tags', // by tags
        count: { $sum: 1 } // and adding a new property on it called count, that will add 1 for each element
      } 
    },
    { $sort: { count: -1 } } // and finally, we'll sort it by the count field, descending
  ]);
}

// we're exporting the model created with the Schema we defined previously
module.exports = mongoose.model('Post', postSchema); 