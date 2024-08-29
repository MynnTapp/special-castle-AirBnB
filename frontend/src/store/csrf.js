import Cookies from "js-cookie";

export async function csrfFetch(url, options = {}) {
   options.method = options.method || "GET";
   options.headers = options.headers || {};

   if (options.method.toUpperCase() !== "GET") {
      options.headers["Content-Type"] =
         options.headers["Content-Type"] || "application/json";
      options.headers["XSRF-Token"] = Cookies.get("XSRF-Token");
   }
   const res = await window.fetch(url, options);

   if (!res.ok) {
      const data = await res.json();
      data.errors = "Something went wrong";
      return data;
   }
   const parsedRes = await res.json();
   return parsedRes;
}

export function restoreCSRF() {
   return csrfFetch("/api/csrf/restore");
}
