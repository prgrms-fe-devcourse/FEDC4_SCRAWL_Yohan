import { Children, isValidElement } from "react";

const Condition = ({
  children
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return children;
};

const Conditional = ({
  children,
  target
}: {
  children: React.ReactNode;
  target: string;
}) => {
  const validElements = Children.toArray(children).filter(isValidElement);
  const targetElement = validElements.find(
    (element) => (element.props as { name: string }).name === target
  );

  return targetElement ?? null;
};

Conditional.Condition = Condition;

export default Conditional;
