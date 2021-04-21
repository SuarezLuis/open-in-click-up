const { execSync } = require("child_process");

const main = async () => {
  try {
    const re = new RegExp("CU-[a-zA-Z0-9]+");
    const branchName = execSync("git branch --show-current", {
      encoding: "utf-8",
    });

    const matches = branchName.match(re);
    if (matches) {
      console.log(matches[0]);
      const commandInOS = process.platform === "darwin" ? "open" : "start";
      execSync(
        `${commandInOS} https://app.clickup.com/t/${matches[0].split("-")[1]}`
      );
    } else {
      console.error("Sorry cant find the ticket id in your branch name. 🤷");
    }
  } catch (e) {
    console.error("Oops are you sure that you are in a github repo? 👀");
  }
};

main();
