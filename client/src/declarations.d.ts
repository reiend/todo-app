// this remove linting need declaration

declare module '*.jpeg' {
  const content: any;
  export default content;
}

declare module '*.tsx' {
  const content: any;
  export default content;
}

declare module '*.js' {
  const content: any;
  export default content;
}

declare module '*.ts' {
  const content: any;
  export default content;
}

// aliases
declare module '@components/*' {
  const content: any;
  export default content;
}
