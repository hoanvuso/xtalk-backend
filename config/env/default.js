'use strict';
var fontendUrl = 'https://myxtalk.info';
var backendUrl="https://admin.myxtalk.info";
var uploadPath = 'uploads';
var path = require('path');

module.exports = {
  app: {
    title: 'MEAN.JS',
    description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
    keywords: 'mongodb, express, angularjs, node.js, mongoose, passport',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  twiAccountSid : "AC2d9082f07ccead85c92dfb9aa7c47131",
  twiAuthToken: "9d18d7854a3a9ebcf83ee835178fda1d",
  twiMlAppSid : "AP67014909df2b142eb3375a04f1680eb2",
  mailDriver:"smtp",
  callerPhoneNumber:'+12568407674',
  root: path.normalize(__dirname + '/../../..'),
  galleryPath:path.normalize(__dirname+'../../../public/uploads/gallery/'),
  avatarPath:path.normalize(__dirname+'../../../public/uploads/avatar/'),
  fontendUrl:fontendUrl,
  backendUrl:backendUrl,
  adminEmail:"support@xtalk.info",
  websiteName:'Xtalk',
  emailFrom:"support@xtalk.info",
  adsPath:path.normalize(__dirname+'../../../public/uploads/ads/'),
  audioPath:path.normalize(__dirname+'../../../public/uploads/audio/'),
  galleryPath:path.normalize(__dirname+'../../../public/uploads/gallery/'),
  avatarBaseUrl:backendUrl+'/assets/images/img.png',
  logoPath:path.normalize(__dirname+'../../../public/uploads/logo/'),
  ccbillLogPath:path.normalize(__dirname+'../../../public/storage/log/'),
  wallBaseUrl:backendUrl+'/assets/images/profile.png',
  uploadPath:path.normalize(__dirname+'../../../public/uploads/'),
  faviconPath:path.normalize(__dirname+'../../../public/uploads/favicon/'),
   imageSize:{
    thumbnail:{
      width:200,
      height:250,
      action:'cover'
    },
    medium:{
      width:250,
      height:350,
      action:'cover'
    },
    big:{
      width:350,
      height:450,
      action:'cover'
    },
  },
  db: {
    promise: global.Promise
  },
  port: process.env.PORT || 9110,
  host: process.env.HOST || 'localhost',
  // DOMAIN config should be set to the fully qualified application accessible
  // URL. For example: https://www.myapp.com (including port if required).
  domain: process.env.DOMAIN,
  // Session Cookie settings
  sessionCookie: {
    // session expiration is set by default to 24 hours
    maxAge: 24 * (60 * 60 * 1000),
    // httpOnly flag makes sure the cookie is only accessed
    // through the HTTP protocol and not JS/browser
    httpOnly: true,
    // secure cookie should be turned to true to provide additional
    // layer of security so that the cookie is set only when working
    // in HTTPS mode.
    secure: false
  },
  // sessionSecret should be changed for security measures and concerns
  sessionSecret: process.env.SESSION_SECRET || 'MEAN',
  // sessionKey is the cookie session name
  sessionKey: 'sessionId',
  sessionCollection: 'sessions',
  // Lusca config
  csrf: {
    csrf: false,
    csp: false,
    xframe: 'SAMEORIGIN',
    p3p: 'ABCDEF',
    xssProtection: true
  },
  logo: 'modules/core/client/img/brand/logo.png',
  favicon: 'modules/core/client/img/brand/favicon.ico',
  illegalUsernames: ['meanjs', 'administrator', 'password', 'admin', 'user',
    'unknown', 'anonymous', 'null', 'undefined', 'api'
  ],
  aws: {
    s3: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      bucket: process.env.S3_BUCKET
    }
  },
  uploads: {
    // Storage can be 'local' or 's3'
    storage: process.env.UPLOADS_STORAGE || 'local',
    profile: {
      image: {
        dest: './modules/users/client/img/profile/uploads/',
        limits: {
          fileSize: 1 * 1024 * 1024 // Max file size in bytes (1 MB)
        }
      }
    }
  },
  shared: {
    owasp: {
      allowPassphrases: true,
      maxLength: 128,
      minLength: 10,
      minPhraseLength: 20,
      minOptionalTestsToPass: 4
    }
  },
  mailer: {
    service: 'smtp', //smtp, mailgun,mailin,mandrill
    auth: {
      port: 465,
      host: 'sexygirlslovephonesex.com',
      tls: {
        rejectUnauthorized: false
      },
      secure: false,
      auth: {
        user: 'admin@sexygirlslovephonesex.com',
        pass: '5Kd2omd0s'
      },
     
    }
  },


};
