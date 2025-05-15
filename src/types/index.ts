export type Task = {
  id: string
  title: string
  description?: string | null
  status: "pending" | "in-progress" | "completed"
  createdAt: Date
  updatedAt: Date
}

export type TaskCreateInput = {
  title: string
  description?: string
  status?: "pending" | "in-progress" | "completed"
}

export type TaskUpdateInput = {
  title?: string
  description?: string | null
  status?: "pending" | "in-progress" | "completed"
}
