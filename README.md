# docker-test

Add this to your hosts file 

```
127.0.0.1 docker-test.com
```

Then execute the following commands in the terminal (requires openssl)

```bash
mkdir ssl

cd ssl

openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365 -nodes -subj '/CN=docker-test.com'

cd ../

docker-compose up -d
```

Then open https://docker-test.com/ in browser