/**
 * Form delivery for mardai.ca — sends website form submissions to
 * connect@mardai.ca via FormSubmit's AJAX endpoint.
 *
 * No account, backend, or API key needed: the static site POSTs straight
 * to FormSubmit, which forwards each submission as an email to the inbox.
 *
 * One-time setup: the FIRST submission triggers an activation email to
 * connect@mardai.ca. It must be confirmed once (click the link in that
 * email); after that, every submission arrives in the inbox normally.
 * Until activation, submissions are held, not delivered.
 */
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/connect@mardai.ca';

export async function sendFormEmail(
  subject: string,
  fields: Record<string, string>
): Promise<boolean> {
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: subject,
        _template: 'table',
        _captcha: 'false',
        _honey: '',
        ...fields,
      }),
    });
    if (!res.ok) return false;
    const data: unknown = await res.json().catch(() => null);
    const success = (data as { success?: unknown } | null)?.success;
    return success === 'true' || success === true;
  } catch {
    return false;
  }
}
