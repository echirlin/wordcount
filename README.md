# wordcount
Tiny frontend-only word counter

Can be run locally on any web server. With Docker, run the following from the wordcount directory to watch for the wordcount app on localhost port 8080:

```
docker build -t wordcount .
docker run -dit --name wordcount-app -p 8080:80 wordcount
```
