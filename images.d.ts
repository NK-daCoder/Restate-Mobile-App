// image.d.ts
// tells typescipt which files to access
declare module '*.png' {
    const value: string; // Define the type for PNG files
    export default value;
  }
  
  declare module '*.jpg' {
    const value: string; // Define the type for JPG files
    export default value;
  }
  
  declare module '*.jpeg' {
    const value: string; // Define the type for JPEG files
    export default value;
  }
  
  declare module '*.svg' {
    const value: string; // Define the type for SVG files
    export default value;
  }
  
  declare module '*.gif' {
    const value: string; // Define the type for GIF files
    export default value;
  }