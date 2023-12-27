export const sum = (a, b) => a + b;

export const greetings = (str) => {
  const lowercase = str.replace(/\s+/g, " ").trim().toLowerCase();
  if (lowercase === "hello world") {
    const [hello, world] = lowercase.split(" ");
    const helloCapitalized = hello.replace("h", "H");
    const worldCapitalized = world.replace("w", "W");

    return `${helloCapitalized} ${worldCapitalized}`;
  } else {
    return "";
  }
};
