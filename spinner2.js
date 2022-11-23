//Refactor the logic to remove the repeated setTimeout statements.

//I could create an array of all the outputs and run a loop while incrementing the timer 200ms each iteration. Seems like a very tedious way though.

const strArray = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let timer = 100;
for (const each of strArray) {
  setTimeout(() => {
    process.stdout.write(`\r${each}   `);
  }, timer);
  timer += 200;
}
setTimeout(() => console.log('\n'), timer); // to switch to new line at the end of the loop