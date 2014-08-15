ApiBoostrap
===========

Boostrap project for api definition

Version
----

1.0

Installation
--------------

```sh
git clone git@github.com:YmagynSAS/ApiBoostrap.git MyApiDocs
cd MyApiDocs
npm install
grunt init
```

Configuration
--------------

Configure api.json by setting "baseUrl" and "deployUrl" according to your configuration.

```json
{
    "baseUrl": "http://MY-BASE-API-APTH/",
    "deployUrl": "http://MY-DOC-URL/",
    "version": 1
}
```
Build
--------------

```sh
grunt build
```
