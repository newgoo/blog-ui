import superagent from 'superagent';
// import superagentJsonapify from 'superagent-jsonapify';

// superagentJsonapify(superagent);

export const get = function (url, queryParam = {}) {
  let rl = 'http://127.0.0.1:8081' + url;
  return superagent.get(rl).query(queryParam).timeout(3000);
};

// const unauthorizedRedirect = (req) => {
//   req.on('response', function (res) {
//     if (res.status === 401) {
//       localStorage.removeItem('user');
//       localStorage.removeItem('token');
//       window.location = process.env.HTTP_HOST + '/auth'
//     }
//     if (res.status === 403) {
//       window.location = window.location.origin + "/403"
//     }
//     if (res.status === 500) {
//       // handle internal error
//       // popError(res)
//     }
//   })
// }
