const connectToDevTools = notifier => {
    if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
      const devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect();
  
      notifier.subscribe(state => {
        devTools.send('STATE_CHANGE', state);
      });
  
      devTools.subscribe(message => {
        if (message.type === 'DISPATCH' && message.state) {
          notifier.setState(JSON.parse(message.state));
        }
      });
    }
  };
  
  export default connectToDevTools;
  