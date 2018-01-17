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

// /**
//  * parameter must be string
//  * validate the str is
//  * null  OR undefined OR str.trim() is ''
//  * @param str
//  */
// export const isNilOrEmpty = function (str) {
//   let isNil = str === null || str === void 0
//   if (isNil) return isNil;
//   if (toString.call(str) === '[object Object]') {
//     return false;
//   }
//   if (toString.call(str) === '[object Number]'){
//     return false;
//   }
//   if (toString.call(str) !== '[object String]'){
//     throw Error('parameter should be string or number');
//   }
//   return str.trim() === ''
// };
//
// //validate string array or Object's all value
// export const checkObjNilOrEmpty = function (object) {
//   var keys = Object.keys,
//     isExistBlank = false;
//   for(let key in keys) {
//     if(isNilOrEmpty(object[key])){
//       isExistBlank = true;
//       break
//     }
//   }
//   return isExistBlank;
// };
//
// /**
//  * validate str which consist of letter, number and underline and has to begin with letter
//  * @param str
//  * @return {boolean}
//  */
// export const validatePassword = function(str) {
//   var reg = /^[a-zA-Z0-9]{6,20}$/;
//   return reg.test(str);
// };
// export const validateLetterNumberAndUnderline = function(str) {
//   var reg = /^[a-zA-Z][a-zA-Z0-9_]{4,12}$/;
//   return reg.test(str);
// };
//
// export const validateLetterNumberAndMiddleline = function(str) {
//   var reg = /^[a-zA-Z][a-zA-Z0-9-]{0,20}$/;
//   return reg.test(str);
// };
//
// /**
//  * validate email
//  * @param email
//  * @returns {boolean}
//  */
// export const validateEmail = (email) => {
//   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }
//
// /**
//  * validate ip
//  * @param ip
//  * @returns {boolean}
//  */
// export const validateIp = (ip) => {
//   return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/.test(ip);
// }
//
// /**
//  * validate name include blank or chinese
//  * @param name
//  * @returns {boolean}
//  */
// export const validateBlankOrChinese = (name) => {
//   return /^[\S]+$/.test(name) && !(/[\u4e00-\u9fa5]/g.test(name));
// }
//
// /**
//  * convert total seconds to total hour
//  */
// export const convertSecondsToTotalTime = (seconds) => {
//   if(seconds> 0 && seconds< 1) {
//     return seconds.toFixed(2) + '秒';
//   }
//   if(seconds === 0) {
//     return '---'
//   }
//   let second = parseInt(seconds)
//   let minute = 0
//   let hour = 0
//   let result = ''
//   if(second > 60) {
//     minute = parseInt(second/60)
//     second = parseInt(second%60)
//     if(minute > 60) {
//       hour = parseInt(minute/60)
//       minute = parseInt(minute%60)
//     }
//   }
//   result += hour>0 ? hour+ '小时': ''
//   result += minute>0 ? minute+ '分': ''
//   result += second>0 ? second+ '秒': ''
//   return result
// }
//
// /**
//  *
//  * format {label: 'label', value: 'value'} to {name: 'label', id: 'value'}
//  * @param obj
//  */
// export const formatSelect = (obj) => {
//   return mapKeys(obj, (value, key)=> {
//     return key === 'label' ? 'name' : 'id'
//   })
// }
//
// export const formatSelectObj = (obj) => {
//   let newObj = mapKeys(obj, (value, key)=> {
//     // return key === 'id' ? 'value' : 'label'
//     if(key === 'id') {
//       return 'value'
//     }else if (key === 'name') {
//       return 'label'
//     }
//   })
//   return pick(newObj, ['label', 'value'])
// }
//
// export const getValidObject = (obj) => {
//   let isNil = obj === null || obj === void 0
//   if (isNil) {
//     obj= {}
//   }
//   return obj
// }
//
// export const getValidObjects = (objArr) => {
//   objArr.forEach((item) => {
//     getValidObject(item)
//   })
// }
//
// export const guidGenerator = ()=> {
//   var S4 = function () {
//     return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
//   }
//   return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4())
// }
//
// Validator.extend('verify_subnet', {
//   getMessage: (field) => field + `不合法`,
//   validate: (value) => new Promise(resolve => {
//     let ipExp = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/
//     let subnetExp = /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)\/(2[0-4]\d|25[0-5]|[01]?\d\d?)$/
//     resolve({
//       valid: value && (!! ipExp.test(value) || !! subnetExp.test(value))
//     })
//   })
// })
