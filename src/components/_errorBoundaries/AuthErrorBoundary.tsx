import { Component } from "react";

import AuthErrorFallback from "@components/_errorFallbacks/AuthErrorFallback";

import { AuthError } from "@utils/AuthError";

interface Props {
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
      return (
        <AuthErrorFallback
          error={this.state.error}
          onMounted={() => this.setState({ hasError: false })}
        />
      );
    }
    throw this.state.error;
  }
}

export default AuthErrorBoundary;
