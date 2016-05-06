var passport = require('passport'), FacebookStrategy = require('passport-facebook').Strategy, 
  LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcrypt');

function findById(id, callback) {
  FacebookUser.find(id).then(function (err, user) {
    if (err) {
      callback(null, null);
    } else {
      callback(null, user);
    }
  });
};

function findByFacebookId(id, callback) {
  FacebookUser.findOne({
    facebookId: id
  }).exec(function (err, user) {
    if (err) {
      callback(null, null);
    } else {
      callback(null, user);
    }
  });
};

passport.serializeUser(function (user, callback) {
  callback(null, user.id);
});

passport.deserializeUser(function (id, callback) {
  findById(id, function (err, user) {
    callback(err, user);
  });
});

passport.use(new FacebookStrategy({
    clientID: "642997825848133",
    clientSecret: "9562ea8991c8c7b854a8cbec5e602562",
    callbackURL: "http://localhost:1337/auth/facebook/callback",
    enableProof: false,
    profileFields: ['id', 'displayName', 'photos', 'email']

  }, function (accessToken, refreshToken, profile, callback) {

    findByFacebookId(profile.id, function (err, user) {
      // Create a new User if it doesn't exist yet
      if (user == null) {
        FacebookUser.create({

          facebookId: profile.id,
          name: profile.displayName,
          picture: profile.photos[0].value,
          email: profile.emails[0].value

        }).exec(function (err, user) {
          console.log(user);
          console.log("didit");
          if(user){
            console.log(err);
            callback(null, user);
          
          // if (user) {
          //   return (null, user)
          } else {
            callback(err, null);
          }
        });

      // If there is already a user, return it
      } else {
        return callback(null, user, {
          message: "logged in successfully"
        });

      }
    });
  }
));
// LOCAL SIGN IN
passport.use(new LocalStrategy({

  usernameField: 'email',
  passwordField: 'password'

}, function (email, password, callback) {
    User.findOne({email: email}).exec(function (err, user) {
      // if there's an error 
    if(err){
      console.log(err);
      return callback(err);
    }
    // if the user doesn't exist
    if(!user) {
      return callback(null, false, {message: 'Incorrect email.'});
    }
    // if the user does exist, bcrypt the password
    bcrypt.compare(password, user.password, function (err,res) {
      if(!res){
        return callback(null, false, {
          message: 'Invalid password'
        });
      }
      return callback(null, user, {
        message: 'Logged In Successfully'
      });
    });
  });
}));












