import path from "path";

export const options = {
  definition: {
    info: {
      title: "Res api con express y mysql2",
    },
  },
  apis: [path.join(__dirname, "../src/routes/**/*.js")],
};
