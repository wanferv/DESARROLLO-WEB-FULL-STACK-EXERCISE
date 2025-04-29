import figlet from "figlet";

figlet("Wanferv", (err, data) => {
    if (err) {
      console.log("Algo salió mal...");
      console.dir(err);
      return;
    }
    console.log(data);
  });