export const handleError = (error, context) => {
    console.error(`[CaglarPod] ${context ? `${context} - ` : ''}${error.message}`, error);
    // Additional error reporting can be added here (e.g., sending to an external monitoring service)
  };
  
  export default handleError;
  