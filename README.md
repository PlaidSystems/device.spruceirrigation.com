Spruce website built with Gatsby and Tailwind

## TODO

### Notes

## Netlify setup

Node Manager
https://github.com/coreybutler/nvm-windows

- list node versions: nvm ls
- show current node version: node -v
- install latest version of node: nvm install lts 64
- use different version: nvm use 18.16.0

Gatsby

- npx gatsby develop

Netlify Subdomain

- create DNS entry in cpanel with: subdomain.domain.com. CNAME xxxx.netlify.app

Netlify Gatsby build error

- update env variables in Netlify to include:
- node_version: Production 18
- npm_flags: Production --legacy-peer-deps
-

Netlify

- put functions in directory ../netlify/functions
- use function for mailerlite subscribe
- env variables go in Netlify web console
- add plugin Gatsby cache for faster gatsby builds
- install netlify cli
  - netlify init to connect
  - netlify dev to dev and test functions

make public
