const context = (<any>require).context('./app', true, /\.spec\.ts/);
context.keys().forEach(context);
