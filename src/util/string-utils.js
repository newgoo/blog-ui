/**
 *  var a = '/api/projects/$1/pipelines/$2'
 *  formatString(a, 'abc', 'sdfs')
 * @param str
 * @param placeholders
 */
export const formatString = function (str, ...placeholders) {
  for (var index = 0; index < placeholders.length; index++) {
    str = str.replace(`$${index + 1}`, placeholders[index]);
  }
  return str;
};
