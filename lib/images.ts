/**
 * Portraits for the concept are the client's own photographs from her current
 * website, served through /api/img so they load reliably inside the preview.
 * The commissioned site will use the new photographs from the image brief.
 */
export const EXISTING_SITE_IMAGE_IDS = [
  "94fca316-55fa-4db9-aa5e-2602d5566090",
  "a7575508-68c1-49b2-b8d6-c8360682f496",
  "e78b2c91-0a33-4395-a042-aa26a90fdc87",
  "2124f304-b8da-4bab-8351-1afd0eaa220e",
  "0ef3e258-7314-41b6-8a57-578aa6d76391",
  "72d7ff4b-52f9-41a9-8728-164ea265c5fd",
  "3ff0992a-521b-4e0b-93ef-ebf5f25fe8ab",
  "1b2da298-a61f-48d0-9a57-6e62b1b23268",
  "4d535d27-9861-42d2-b409-41097d651cd1",
  "320ad240-ef27-45a9-a3f1-24ddcb52268c",
  "1e712324-bfae-4a58-af82-fd34a6501e57",
  "92667a02-cf13-4580-8bee-3a604ca1db34",
  "2c70a7bb-c693-49c0-ac35-b4d7da2bdb2b",
  "17a5eeea-062a-45a9-90f0-a02f03048aa6",
  "b6c5b987-c149-4972-a80d-89ba4bd79c2e",
  "e6af88e6-43a0-46f2-9c44-7c9117e31c03",
  "3195269a-eddf-46c7-b0d6-981cdc609772",
];

export const img = (id: string, w = 1400, ar = "4:5", grade: "warm" | "portrait" | "" = "") =>
  `/api/img/${id}?w=${w}&ar=${ar}${grade ? `&grade=${grade}` : ""}`;

/**
 * Photographs used on the homepage (indices into EXISTING_SITE_IMAGE_IDS).
 * Portraits: 16 (seated, lit steps) and 1 (standing). Supporting imagery is her own
 * warm hotel/interior photography — architecture and calm interiors in the brand palette.
 */
export const PICKS = { hero: 16, story: 1, speaking: 5, haltung: 5 };

export const PHOTOS = {
  hero: img(EXISTING_SITE_IMAGE_IDS[PICKS.hero], 1400, "4:5", "portrait"),
  story: img(EXISTING_SITE_IMAGE_IDS[PICKS.story], 1200, "4:5", "portrait"),
  speaking: img(EXISTING_SITE_IMAGE_IDS[PICKS.speaking], 1400, "4:5", "warm"),
  /** faint photographic ground behind the Haltung claim */
  haltung: img(EXISTING_SITE_IMAGE_IDS[PICKS.haltung], 1800, "16:7", "warm"),
};
