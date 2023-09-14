import { Component } from "react";

import { AuthError } from "@utils/AuthError";

interface Props {
  fallback: React.ReactNode;
  children?: React.ReactNode;
}

interface State {
  error?: Error;
  hasError: boolean;
}

class AuthErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { error, hasError: true };
  }

  public render() {
    if (!this.state.hasError) {
      return this.props.children;
    }
    if (this.state.error instanceof AuthError) {
      return this.props.fallback;
    }
    throw this.state.error;
  }
}

export default AuthErrorBoundary;
