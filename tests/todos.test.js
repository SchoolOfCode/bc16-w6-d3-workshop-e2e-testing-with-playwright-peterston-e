import { test, expect } from "@playwright/test";

test("practice test should pass", () => {});

test("has title", async ({ page }) => {
	await page.goto("http://localhost:3000/");

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/Todo List/);
});
