module.exports = {
  apps: [
    {
      name: "app",
      script: "app.js",
      // pid: "./data/logs/",
      maxRestarts: 2,

      // exec_mode: "cluster",
      // instances: 2,
      autorestart: false,
      watch: true,
      ignore_watch: ["node_modules", 
      "data/logs", 
      "build/images"],
      out_file: "./data/logs/console.log",
      error_file: "./data/logs/err.log",
      time: true,
      log_type: "format"
    }
  ]
}