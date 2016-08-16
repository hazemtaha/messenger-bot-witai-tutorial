'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAZA3IL9y244BALmZCECYlj8uhHLNU7WIuvAOZANRsx5uKL0ZCaWhMWhaRSYd6wb1Mldo25gvxiNQB8ZADZCA3Lcsc9v7yJ9rMYI1a7H9HMYkHERFugUzJwYkvo0ljQoJwZBxBxWt31YyATO6HNGg2IJaF9Lfhud2lKS585qiYMFwZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'verfy_token'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}
