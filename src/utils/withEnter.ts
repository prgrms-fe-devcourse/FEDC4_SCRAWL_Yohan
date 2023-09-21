const withEnter = <T extends () => void>(
  event: React.KeyboardEvent<Element>,
  callback: T
) => {
  if (event.key === "Enter") {
    callback();
  }
};

export default withEnter;
