export function useFlowbite(callback) {
   if (import.meta.client) {
      import("flowbite").then((flowbite) => {
         callback(flowbite);
      });
   }
}
