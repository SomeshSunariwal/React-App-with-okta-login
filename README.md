# React-with-okta-login

React-with-okta-logic

# Steps

1. Create a Single Page Application in okta
   1. Give a name to app
   2. Select Authorization Grant type
      1. Authorization Code
      2. Refresh Token
   3. Put Sign-in redirect URIs as `http://localhost:3000/login/callback`
   4. Sign-ot redirect URIs as `http://localhost:3000`
2. Get the `Client ID` and okta `domain name`
3. Place it into .env file to make it work this application for you.

# Images

## Client ID is here

![image2](./images/image2.JPG)

## Rest app will look like this

![image1](./images/image1.jpg)

# Issues and Solutions

### 1. Might see infinite loading issue while log in.

    This only occurs when you trying to test you app login functionality in the same browser in which you are already logged in as a admin.

# Production Deployment

1. Add homepage location in `package.json`

```json
{
  "homepage": "/"
}
```

2. Create React App Build

```bash
npm run build
```

3. See Docker Image for Nginx Ref.

# Jenkins Deployment
![image4](./images/image3.png)

# Resource

1. https://developer.okta.com/code/react/okta_react_sign-in_widget
