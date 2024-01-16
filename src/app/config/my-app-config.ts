export default {

    oidc: {
        clientId:'0oae82emczqQ9RhMp5d7', //issuer of tokens
        issuer: 'https://dev-54705505.okta.com/oauth2/default', //authorizing with okta server
        redirectUri: 'https://fullstackecommerce.link/login/callback', // user gets sent here
        scopes: ['openid', 'profile', 'email'] //access info about a user to authenticate
    }
}
