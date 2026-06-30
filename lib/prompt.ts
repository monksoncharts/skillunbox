import { COURSES } from "@/constants/courses";

export const websiteContext = buildWebsiteContext();

function buildWebsiteContext() {
  const courseList = COURSES.map((course, index) => {
    return `
${index + 1}. ${course.title}
Slug: ${course.slug}
Provider: ${course.provider}
Instructor: ${course.instructor}
Badge: ${course.badge || "Not specified"}
Rating: ${course.rating} from ${course.ratingsCount} ratings
Skills: ${course.skills.join(", ")}
Overview: ${course.overview}
What students will learn: ${course.youWillLearn.join("; ")}
Modules: ${course.modules.join("; ")}
Career opportunities: ${course.careerOpportunities.join(", ")}
Course page: /courses/${course.slug}
`.trim();
  }).join("\n\n");

  return `
Website name: SkillUnbox
Website type: Practical, job-oriented learning platform
Available course count: ${COURSES.length}
Available courses:

${courseList}

General answering rules:
- If a user asks whether a course is available, compare their wording with course titles, slugs, skills, modules, and career opportunities.
- If a course is available, mention the closest course name and page path.
- If a course is not available in the course list, clearly say it is not currently listed on this website.
- Do not mention course prices or fees. If a user asks about price, fees, discount, or payment, politely ask them to contact SkillUnbox on WhatsApp at +91 72487 62290 for current pricing and further information.
- For ratings, skills, modules, and career roles, use only the course data above.
`.trim();
}

export function buildSystemPrompt(context: string) {
  return `
You are the official AI assistant for this website.

Only answer questions using the provided website context.

If the answer is not found, politely reply that the information is unavailable on this website.

Never invent facts.

Website context:
${context}
`.trim();
}
