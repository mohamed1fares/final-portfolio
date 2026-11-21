import { Hono } from "hono";
import { ContactFormSchema } from "../shared/types";

const app = new Hono<{ Bindings: Env }>();

/**
 * Contact form endpoint
 * Validates input, stores in D1 if available, and sends email notification via FormSubmit
 */
app.post("/api/contact", async (c) => {
  try {
    const body = await c.req.json();
    const parsed = ContactFormSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const firstError = Object.values(fieldErrors).flat()[0] || "Validation failed";
      return c.json(
        { error: firstError, details: fieldErrors },
        400
      );
    }

    const { name, email, subject, message } = parsed.data;

    // Store in D1 database if DB binding exists
    if (c.env?.DB) {
      try {
        await c.env.DB.prepare(
          `INSERT INTO contact_messages (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, datetime('now'))`
        ).bind(name, email, subject, message).run();
      } catch {
        try {
          await c.env.DB.prepare(
            `CREATE TABLE IF NOT EXISTS contact_messages (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              email TEXT NOT NULL,
              subject TEXT NOT NULL,
              message TEXT NOT NULL,
              created_at TEXT NOT NULL
            )`
          ).run();
          await c.env.DB.prepare(
            `INSERT INTO contact_messages (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, datetime('now'))`
          ).bind(name, email, subject, message).run();
        } catch (dbErr) {
          console.warn("D1 write skipped/failed:", dbErr);
        }
      }
    }

    // Send email notification to mohamed.fares.developer@gmail.com via FormSubmit
    try {
      const emailRes = await fetch("https://formsubmit.co/ajax/mohamed.fares.developer@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          _subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
          message: message,
          _template: "table",
        }),
      });

      if (!emailRes.ok) {
        const errorText = await emailRes.text();
        console.warn("FormSubmit response not ok:", emailRes.status, errorText);
      }
    } catch (mailErr) {
      console.warn("Email dispatch error:", mailErr);
    }

    return c.json({ success: true, message: "Message sent and received successfully" });
  } catch (err) {
    console.error("Contact handler error:", err);
    return c.json({ error: "Internal server error" }, 500);
  }
});

export default app;
