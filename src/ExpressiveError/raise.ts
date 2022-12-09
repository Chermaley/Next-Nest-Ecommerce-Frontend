import ExpressiveError from "./ExpressiveError";

export default (...args: ConstructorParameters<typeof ExpressiveError>): never => {
  throw new ExpressiveError(...args);
};
