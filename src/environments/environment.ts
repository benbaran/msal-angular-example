// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  clientID: '57fb7914-e5e8-4d4c-a358-d097815ead0a',
  graphScopes: ["openid", "profile"],
  signUpSignInPolicy: '',
  tenant: 'careportfol.io'
};
