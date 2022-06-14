type Options = {
  expires?: Date | number | string;
  path?: string;
  domain?: string;
  secure?: boolean;
  "max-age"?: number;
};

export const setCookie = function (name, value, options: Options = {}) {
  options = {
    path: "/",
    ...options,
  };

  if (options?.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  console.log({ updatedCookie });

  document.cookie = updatedCookie;
};

export const getCookie = function (cookie, name) {
  let matches = cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const deleteCookie = function (name) {
  setCookie(name, "", {
    "max-age": -1,
  });
};
