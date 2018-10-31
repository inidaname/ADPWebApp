export const environment = {
  production: true,
  cloudinary: {
    upload: {
      cloud_name: 'inidaname', // Your cloud name
      upload_preset: 'adpnigeria' // Your preset
    },
    baseApiUrl: 'https://api.cloudinary.com/v1_1/inidaname/image/upload',
    // Other configuration stuff necessary for cloudinary
  }
};
