## COGNITO

1 - Create a User Pool + App Client

```
- create a user pool
- set up identity in SES
- pool name: aws_playground_users
- client name: aws_playground
- callback url: https://localhost:3000
- cognito domain: https://playground.auth.eu-west-2.amazoncognito.com
```

2a - Amplify UI

```
You can use a pre built UI by using
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
```

2b - Custom UI

```
You can however use your own custom form to handle the cognito requests.
i.e.
 const user = await Auth.signIn(
      username.toLowerCase().trim(),
      password.trim()
    );
```

3 - Social Login - GOOGLE

```
  TODO ...
```
