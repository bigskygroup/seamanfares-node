module.exports = {
  apps: [
    {
      name: "app",
      script: "app.js",

      // exec_mode: "cluster",
      // instances: 2,
      autorestart: false,
      watch: false,
       ignore_watch : ["./node_modules", "./data/logs", "./data/logs/err.log","./data/logs/console.log"],
      out_file: "./data/logs/console.log",
      error_file: "./data/logs/err.log",
      time: true,
      log_type:"format",
    }
  ]
}