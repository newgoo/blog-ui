import superagent from 'superagent';
// import superagentJsonapify from 'superagent-jsonapify';

// superagentJsonapify(superagent);

export const get = function (url, queryParam = {}) {
  // let rl = 'http://172.31.161.175:8081' + url;
  let rl = 'http://api.newgoo.org' + url;
  return superagent.get(rl).query(queryParam).timeout(3000);
};
