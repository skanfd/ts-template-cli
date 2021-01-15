import logger from "./logger";

export default function () {
  logger.info("There's something you'd better know.");
  logger.good("I've done a good job, praise me now!");
  logger.warn("Oh...Unlucky...");
  logger.fail("F**************");
}
