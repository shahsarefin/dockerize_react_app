// Correct format for a .d.ts file
declare module "my-module" {
  export function myFunction(arg: string): void;
}

// Correct usage in a .d.ts file
declare global {
  interface Window {
    myCustomProperty: any;
  }
}
export {};
