const testContext = (<any>require).context('./', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);
