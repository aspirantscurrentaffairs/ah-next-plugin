import { join } from "path";

const namespace = "plugins";

declare module "actionhero" {
  export interface ActionheroConfigInterface {
    [namespace]: ReturnType<typeof DEFAULT[typeof namespace]>;
  }
}

export const DEFAULT = {
  plugins: () => {
    return {
      "ah-next-plugin": {
        path: join(
          __dirname,
          "..",
          "..",
          "..",
          "node_modules",
          "ah-next-plugin"
        ),
      },
    };
  },
};
