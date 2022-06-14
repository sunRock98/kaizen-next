// const { response } = require("express");

// setCookie = function (name, value, options = {}) {

//     options = {
//         // path: '/',
//         // при необходимости добавьте другие значения по умолчанию
//         ...options
//     };

//     if (options.expires instanceof Date) {
//         options.expires = options.expires.toUTCString();
//     }

//     let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

//     for (let optionKey in options) {
//         updatedCookie += "; " + optionKey;
//         let optionValue = options[optionKey];
//         if (optionValue !== true) {
//             updatedCookie += "=" + optionValue;
//         }
//     }

//     res.header('cookie') = updatedCookie;
// }

// getCookie = function (cookie, name) {
//     let matches = cookie.match(new RegExp(
//         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//     ));
//     return matches ? decodeURIComponent(matches[1]) : undefined;
// }

// deleteCookie = function (name) {
//     setCookie(name, "", {
//         'max-age': -1
//     })
// }

// module.exports = { getCookie, setCookie, deleteCookie }
export {};
