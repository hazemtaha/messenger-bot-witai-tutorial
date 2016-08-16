'use strict';

// const WIT_TOKEN = process.env.WIT_TOKEN
const WIT_TOKEN = 'IP72U623OOYEEQ4EDP4WV4IR44SRJZZJ'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAZA3IL9y244BAFmPX79kaqR5oIdhTAHiTpGZAHJ5hsbZCRYRhhZClT9azj1KWOUBKis0wmQ7u65uZBIHIGOUlO5uKqup6RZBkOigUqFP9d4sT1G6ZAotlRsyzNiYHdA7HFKi2npKpJ5TCyyEdh1EeeYkMfsZCgH6lm8nk6GER5xAgZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'verify_token'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}
