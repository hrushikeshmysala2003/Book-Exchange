const {Strategy} = require("passport-google-oauth20")
const passport = require("passport")
const User = require("../models/User")

passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
}, async function (accessToken, refreshToken, profile, done ){
        // Database comes here
    const user = await User.findOne({
        googleId: profile.id,
    })
    if(!user){

        await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            password: "password",
            avatar: {
                public_id:"demo",
                url:profile.photos[0].value
            }
        })

        return done(null, user);


    }else{
        return done(null, user);
    }

}));

passport.serializeUser( (user, done) => {
    return done(null, user._id);
} );
passport.deserializeUser( async (_id, done) => {
    const user = await User.findById(_id)
    return done(null, user);
} )
