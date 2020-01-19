var Facebook = require('fb').Facebook,
    FB = new Facebook(null);
    var id = '5bdcbe9e95952acec032b4d98a8e36b13682a527';
FB.setAccessToken('EAACnTX5va0QBAPCrVwoVr065LDJDK8N2N18ZBsVe4kKk77GO3RSsIYuR2VZChB3mCyD2Rn9zdwdqmngEx3ZAwNTLxgfrP9M0TZAVZAy3IPkx6lhR8ZCQeAwi0qURGTpje0MPgLy5JMbPxUrl23Y5tQuMIQEkV03LoxRtdMT0PHSC4L4BC0EYdOejNrwtvB5ZBa0ZAp6wcZCT5owZDZD');

var extractEtag;
FB.api('', 'post', {
    batch: [
        { method: 'get', relative_url: '204450853621011' },
        { method: 'get', relative_url: 'me/friends?limit=50' },
        { method: 'get', relative_url: '204450853621011', headers: { 'If-None-Match': '"7de572574f2a822b65ecd9eb8acef8f476e983e1"' } }, /* etags */
        { method: 'get', relative_url: 'me/friends?limit=1', name: 'one-friend' /* , omit_response_on_success: false */ },
        { method: 'get', relative_url: '{result=one-friend:$.data.0.id}/feed?limit=5'}
    ]
}, function(res) {
    var res0, res1, res2, res3, res4,
        etag1;

    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }

    res0 = JSON.parse(res[0].body);
    res1 = JSON.parse(res[1].body);
    res2 = res[2].code === 304 ? undefined : JSON.parse(res[2].body);   // special case for not-modified responses
                                                                        // set res2 as undefined if response wasn't modified.
    res3 = res[3] === null ? null : JSON.parse(res[3].body);
    res4 = res3 === null ? JSON.parse(res[4].body) : undefined; // set result as undefined if previous dependency failed

    if(res0.error) {
        console.log(res0.error);
    } else {
        console.log('Hi ' + res0.name);
        etag1 = extractETag(res[0]); // use this etag when making the second request.
        console.log(etag1);
    }

    if(res1.error) {
        console.log(res1.error);
    } else {
        console.log(res1);
    }

    // check if there are any new updates
    if(typeof res2 !== "undefined") {
        // make sure there was no error
        if(res2.error) {
            console.log(error);
        } else {
            console.log('new update available');
            console.log(res2);
        }
    }
    else {
        console.log('no updates');
    }

    // check if dependency executed successfully
    if(res[3] === null) {
        // then check if the result it self doesn't have any errors.
        if(res4.error) {
            console.log(res4.error);
        } else {
            console.log(res4);
        }
    } else {
        console.log(res3.error);
    }
});

extractETag = function(res) {
    var etag, header, headerIndex;
    for(headerIndex in res.headers) {
        header = res.headers[headerIndex];
        if(header.name === 'ETag') {
            etag = header.value;
        }
    }
    return etag;
};
