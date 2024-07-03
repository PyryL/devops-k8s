# Exercise 1.01

After creating the app, I ran

```sh
docker build -t pyryl/logoutput .
docker push pyryl/logoutput
kubectl create deployment logoutput-dep --image=pyryl/logoutput
```

Now the output of `kubectl logs logoutput-dep-6ddcd67579-r8djw` looks like this:

```
> log-output@1.0.0 start
> node index.js

2024-07-03T07:06:47.209Z 85766a8f-c9c7-4206-947a-c2a128dc8bef
2024-07-03T07:06:52.217Z 85766a8f-c9c7-4206-947a-c2a128dc8bef
2024-07-03T07:06:57.221Z 85766a8f-c9c7-4206-947a-c2a128dc8bef
2024-07-03T07:07:02.221Z 85766a8f-c9c7-4206-947a-c2a128dc8bef
2024-07-03T07:07:07.227Z 85766a8f-c9c7-4206-947a-c2a128dc8bef
```
