import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false, error: null };
    }
  
    static getDerivedStateFromError(error: any) {
      return { hasError: true, error: error };
    }
  
    componentDidCatch(error: any, errorInfo: any) {
      // Log the error (e.g., send to an error reporting service)
      console.error("Error caught:", error, errorInfo);
    }
  
    render() {
      if (this.state?.hasError) {
        // Render a custom fallback UI
        return <h1>{this.error}</h1>;
      }
      return this.props.children;
    }
  }
  

  export default ErrorBoundary;
