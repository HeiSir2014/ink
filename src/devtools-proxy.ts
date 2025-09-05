export async function loadDevtools() {
  if (process.env['DEV'] === 'true') {
    try {
      await import('./devtools.js');
    } catch (error: any) {
      if (error.code === 'ERR_MODULE_NOT_FOUND') {
        console.warn(
          `
  The environment variable DEV is set to true, so Ink tried to import \`react-devtools-core\`,
  but this failed as it was not installed. Debugging with React Devtools requires it.
  
  To install use this command:
  
  $ npm install --save-dev react-devtools-core
          `.trim() + '\n',
        );
      } else {
        // eslint-disable-next-line @typescript-eslint/only-throw-error
        throw error;
      }
    }
  }
}