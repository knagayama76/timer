"use strict";

const args = process.argv.slice(2);

for (const time of args) {
  if (args.length === 0) return;

  if (time < 0) {
    continue;
  }

  if (time.isNan) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write("\x07");
  }, time * 1000);
}
