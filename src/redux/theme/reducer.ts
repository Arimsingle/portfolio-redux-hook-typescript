export const theme = (toggle = false, action: any) => {
  switch (action.type) {
    case "TOGGLE":
      return !toggle;
    default:
      return toggle;
  }
};
