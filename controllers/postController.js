const mongoose = require('mongoose')
const Post = mongoose.model('Post')
const multer = require('multer'); // to handle with multipart forms
const jimp = require('jimp'); // resize the photos 
const uuid = require('uuid'); // to create unique ids and rename the photos

const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/');
    if(isPhoto) {
      // null error
      next(null, true);
    } else {
      next({ message: 'That filetype isn\'t allowed'}, false);
    }
  }
}

// exports.homePage = (req, res) => {
//   res.render('index', { title: 'Home' });
// }

exports.addPost = (req, res) => {
  res.render('editPost', { title: 'Add Post' });
}

exports.upload = multer(multerOptions).single('photo');

exports.resize = async (req, res, next) => {
  // check if there's no new file to resize coming from multer
  if(!req.file) { // multer puts the file on the req, since it's a middleware
    next();
    return;
  }; 

  const extension = req.file.mimetype.split('/')[1];
  req.body.photo = `${uuid.v4()}.${extension}`;

  const photo = await jimp.read(req.file.buffer); // pass the file buffer to be resized
  await photo.resize(800, jimp.AUTO);
  await photo.write(`./public/uploads/${req.body.photo}`); // write the file to our folder

  next(); // create the post
}

exports.createPost = async (req, res) => {
  // We're awaiting for the result of the save() method. When it's done, the post const will contain the post with the slug that we can use to redirect the user.
  const post = await (new Post(req.body)).save();
  // req.flash('success', `Successfully added ${post.name}. Care to leave a review?`);
  res.redirect(`/posts/${post.slug}`);
}

exports.getPosts = async (req, res) => {
  // 1. Query the db for a list of all posts
  const posts = await Post.find();
  res.render('posts', { title: 'Posts', posts });
}

exports.editPost = async (req, res) => {
  // 1. Find the post given the ID
  const post = await Post.findOne({ _id: req.params.id });
  // 2. Check if user is the author of that post
  // TODO
  // 3. Render the edit post
  res.render('editPost', { title: `Editing ${post.name}`, post });
}

exports.updatePost = async (req, res) => {
  // find and update the post
  const post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body , {
    new: true, //return the updated data instead of the old one
    runValidators: true // the Schema validations by default only run on the item creation. 
  }).exec();
  // redirect the user and give a success message
  req.flash('success', `Successfully updated ${post.name}. <a href="/posts/${post.slug}">View Post -></a>`);
  res.redirect(`/posts/${post._id}/edit`);
}

exports.getPost = async (req, res, next) => {
  // 1. Query the db for a single post, searchin by the slug
  const post = await Post.findOne({ slug: req.params.slug });
  if(!post) return next();

  res.json(post);
}

exports.getPostsByTags = async (req, res) => {
  const tag = req.params.tag;
  const tagQuery = tag || { $exists: true }; // if there's no tag, look for posts that contain any kind of tags
  const tagsPromise = Post.getTagsList(); // This is a custom method
  const postsPromise = Post.find({ tags: tagQuery }); // This is a custom method
  const [ tags, posts ] = await Promise.all([tagsPromise, postsPromise]); // Waiting for all the promises to be resolved and then destructuring them

  res.json({ title: 'Tags', tags, tag, posts });
}