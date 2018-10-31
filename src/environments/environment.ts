// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  cloudinary: {
    upload: {
      cloud_name: 'inidaname', // Your cloud name
      upload_preset: 'adpnigeria' // Your preset
    },
    baseApiUrl: 'https://api.cloudinary.com/v1_1/inidaname/image/upload',
    // Other configuration stuff necessary for cloudinary
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
