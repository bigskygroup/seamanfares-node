module.exports = {
  apps: [
    {
      name: "app",
      script: "app.js",
      pid: "./data/logs/",
      maxRestarts: 2,

      // exec_mode: "cluster",
      // instances: 2,
      autorestart: false,
      watch: false,
       ignore_watch : ["./node_modules/**", "./data/logs", "./data/logs/err.log","./data/logs/console.log", "./build/images", "./build/data", "./config", "./build", "./locales_temp", "./i18n_new.sh"],
      out_file: "./data/logs/console.log",
      error_file: "./data/logs/err.log",
      time: true,
      log_type:"format",
    }
  ]
}