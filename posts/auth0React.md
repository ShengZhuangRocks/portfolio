---
title: "How to setup auth0 with react project"
author: "Sheng Zhuang"
date: "05/03/2021"
stack: "React authorization auth0"
image: "p2.jpg"
---

"Auth0 is an easy to implement, adaptable authentication and authorization platform." from Auth0 official site.

On this platform, you can create applications that can handle auth for your own app, which help decouple the user auth with your app's backend api and lift the heavy work for you. All you need to do is to implement the API in your frontend application.

It can handle normal email and password login and manage the user database for you, or handle login with social media accounts. The default social connections only includes google, you can add quite a wide range of other social connections like: facebook, apple etc.

The process of using Auth0 involves setting up API and using SDK in your code.

### auth API

1.Create Auth Application

Create an auth application on the auth0 website, you can choose application type and language or framework to match your app.

e.g. for a react app, you can choose type of SPA and technology of React.

2.configuration

-Allowed Callback URLs:

-Allowed Logout URLs:

-Allowed Web Origins:

...DEV: http://localhost:<port> | PROD: <domain>

3.domain and client id

when the auth app is created, it will expose the domain and client id of the auth app, which will be used as environment variables to setup connection in your app.

---

### SDK

1.Installation

```bash
$yarn add @auth0/auth0-react
```

2.Auth0 context provider

Provide auth0 as context to your react app.

```jsx
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
```

Domain and clientId passed to Auth0Provider in the example above are from the Auth0 api, which you can store as the environment variable of your app.

3.useAuth0 hooks from the SDK

```js
import { useAuth0 } from "@auth0/auth0-react";

const {
  loginWithRedirect,
  logout,
  user,
  isAuthenticated,
  isLoading,
} = useAuth0();
```

Above are just a few frequently used functions and data that can be extracted from the useAuth0 hook, you can call loginWithRedirect() and logout() in your UI, expose user data, check the auth status for UI.

---
