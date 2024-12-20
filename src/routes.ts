import type { Express } from "express";
import users from "./api/users.js";
import subjects from "./api/subjects.js";
import courses from "./api/courses.js";
import programs from "./api/programs.js";
import plans from "./api/plans.js";
import departments from "./api/departments.js";
import docs from "./api/docs.js";

export function createRoutes(app: Express) {
  // New routes need to be added to this array in order to work
  const routes = [users, subjects, courses, programs, plans, departments, docs];

  routes.forEach((route) => app.use(route));
}
