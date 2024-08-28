export const fixNestedStrings = (obj) => {
   // Iterate over each key in the object
   for (let key in obj) {
      if (typeof obj[key] === "string") {
         try {
            // Try to parse the string as JSON
            const parsedValue = JSON.parse(obj[key]);

            // If successful, replace the string with the parsed object or array
            obj[key] = parsedValue;
         } catch (e) {
            // If an error occurs, ignore it and continue
         }
      }
   }
   return obj;
};
