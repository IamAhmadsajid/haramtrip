// src/lib/formspree.ts

// Formspree endpoint IDs for every form on the site.
export const FORMSPREE_ENDPOINTS = {
  contact: "mwlpklqa",
  planUmrah: "xbgljgkb",
  customSacredPlan: "xjykvyoq",
  packageEnquiry: "xzezbeae",
  referAFriend: "moevqenw",
  tourGuideDetails: "xppwzpjj",
  tourCustomPlan: "xkjgnjvq",
  tourPackageSidePanel: "xwlpklna",
  bookConsultation: "xrpbgpaj",
  searchFlights: "mdekozoz",
  airportTransferQuote: "myezjdwr",
} as const;

export class FormspreeError extends Error {}

/**
 * Submits a form's FormData to Formspree. Throws FormspreeError on failure
 * so callers can show an error toast instead of redirecting.
 */
export async function submitToFormspree(
  endpointId: string,
  formData: FormData
) {
  const res = await fetch(`https://formspree.io/f/${endpointId}`, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new FormspreeError("Submission failed");
  }

  return res;
}
