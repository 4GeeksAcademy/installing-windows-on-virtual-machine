const codespaceName = process.env.CODESPACE_NAME;

if (codespaceName) {
    const url = `https://${codespaceName}-3001.app.github.dev`
  console.log(url);
} else {
  console.log("CODESPACE_NAME environment variable is not set.");
}
