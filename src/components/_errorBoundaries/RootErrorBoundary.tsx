import { Component } from "react";
import { Navigate } from "react-router-dom";

import { PATH } from "@constants/index";

interface Props {
  children?: React.ReactNode;
}

interface State {
  error?: Error;
  hasError: boolean;
}

class RootErrorBoundary extends Component<Props, State> {
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
    this.setState({ hasError: false });
    return <Navigate to={PATH.HOME} />;
  }
}

export default RootErrorBoundary;
