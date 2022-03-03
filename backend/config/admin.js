module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1305239953c44dab1ef1b2bcdd3493f4'),
  },
});
