module.exports = {
  apps: [
    {
      name: "app",
      script: "app.js",

      // exec_mode: "cluster",
      // instances: 2,
      autorestart: true,
      watch: true,
       ignore_watch : ["node_modules","./data/logs", "./data/logs/err.json","./data/logs/console.json"],
      log_file: "./data/logs",
      out_file: "./data/logs/console.json",
      error_file: "./data/logs/err.json",
      time: true,
      log_type:"json",
    }
  ]
}