import { Command } from "commander";
import chalk from "chalk";
import axios from "axios";
import fs from "fs";
const program = new Command();
program
  .name("ninja-utility")
  .description("A simple CLI utility with greet, fetch, and read commands")
  .version("1.0.0");
program
  .command("greet")
  .description("Print a colorful greeting")
  .action(() => {
    console.log(chalk.blue.bold(" Hello"));
  });
program
  .command("fetch")
  .description("Fetch current weather data")
  .action(async () => {
    try {
      const url =
        "https://api.open-meteo.com/v1/forecast?latitude=34.02&longitude=-6.83&current_weather=true";
      const response = await axios.get(url);
      const weather = response.data.current_weather;
      console.log(chalk.green(" Weather Data:"));
      console.log(`Temperature: ${weather.temperature}°C`);
      console.log(`Wind Speed: ${weather.windspeed} km/h`);
      console.log(`Time: ${weather.time}`);
    } catch (err) {
      console.error(chalk.red(" Error fetching weather:"), err.message);
    }
  });
program
  .command("read <file>")
  .description("Read and display the content of a file")
  .action((file) => {
    try {
      const data = fs.readFileSync(file, "utf8");
      console.log(chalk.yellow(" File Content:"));
      console.log(data);
    } catch (err) {
      console.error(chalk.red(" Error reading file:"), err.message);
    }
  });

program.parse(process.argv);
