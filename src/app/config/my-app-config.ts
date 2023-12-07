export default {

    oidc: {
        clientId:'0oadjnyrc30Ff2DAR5d7', //issuers of tokens
        issuer: 'https://dev-54705505.okta.com/oauth2/default', //authorizing with okta server
        redirectUri: 'http://localhost:4200/login/callback', // user gets sent here
        scopes: ['openid', 'profile', 'email'] //access info about a user to authenticate
    }
}
