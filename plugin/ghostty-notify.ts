import type { Plugin } from "@opencode-ai/plugin"
import { spawn } from "child_process"

/**
 * Notification Plugin for OpenCode
 *
 * Uses terminal-notifier to show desktop notifications when:
 * - The agent requests permission to run a tool
 * - The agent completes its actions (session becomes idle)
 */

function sendNotification(title: string, message: string): void {
  spawn("terminal-notifier", ["-title", title, "-message", message], {
    detached: true,
    stdio: "ignore",
  }).unref()
}

export const NotifyPlugin: Plugin = async (ctx) => {
  const projectName = ctx.directory.split("/").pop() || "unknown"

  return {
    event: async ({ event }) => {
      // Notify when agent requests permission to run a tool
      if (event.type === "permission.updated") {
        const permission = event.properties
        const toolType = permission.type || "unknown"
        const title = permission.title || toolType
        sendNotification(`OpenCode [${projectName}]`, `Permission needed: ${title}`)
      }

      // Notify when the agent completes its actions
      if (event.type === "session.idle") {
        sendNotification(`OpenCode [${projectName}]`, "Task completed")
      }
    },
  }
}
