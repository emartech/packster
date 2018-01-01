const testContext = (<any>require).context('./app', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);
