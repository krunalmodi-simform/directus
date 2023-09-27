module.exports = {
    apps: [
        {
            name: "directus-api",
            cwd: "./api",
            script: "npm",
            args: ["run", "dev"],
            env: {
                NODE_ENV: "development"
            }
        },
        {
            name: "directus-app",
            cwd: "./app",
            script: "npm",
            args: ["run", "dev"],
            env: {
                NODE_ENV: "development"
            }
        }
    ]
}
