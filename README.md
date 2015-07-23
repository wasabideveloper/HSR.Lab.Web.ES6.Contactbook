# HSR.Lab.Web.ES6.Contactbook

ES6 based example application to show ES6 modules and classes (using shim loader)


## Develpment

### Environment

* Install node.js
* Install npm module typescript
```bash
sudo npm install typescript -g 
```


## Compile application
```bash
tsc --target ES6 ./Classes/Main.ts
```


### Run application

* Install node.js to get the node package manager (npm)
* Install http-server global
```bash
$ sudo npm install http-server -g
```
* Start the server
```bash
$ cd 'es6-modules'
$ http-server
Starting up http-server, serving ./ on: http://0.0.0.0:8080
```
* Open the url 'localhost:8080' in your browser

**It's necessary to deliver the app by an http-server and to not load it by file because some browsers block the async module loading by es6-shim.**
