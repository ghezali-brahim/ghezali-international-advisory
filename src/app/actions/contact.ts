'use server';

import { Resend } from 'resend';

const TO_EMAIL = 'contact@ghezaliadvisory.com';
const FROM_EMAIL = process.env.RESEND_FROM ?? 'Ghezali Contact <onboarding@resend.dev>';

export type ContactFormState = { success?: boolean; error?: string };

export async function submitContactForm(
  _prev: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const nom = (formData.get('nom') as string)?.trim();
  const societe = (formData.get('societe') as string)?.trim();
  const ca = (formData.get('ca') as string)?.trim();
  const objectif = (formData.get('objectif') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  if (!nom || !societe || !ca || !objectif) {
    return { success: false, error: 'Missing required fields.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { success: false, error: 'Email service not configured. Please contact us by email or phone.' };
  }

  const resend = new Resend(apiKey);
  const subject = `[Contact] ${nom} - ${societe}`;
  const html = `
    <h2>New contact request</h2>
    <p><strong>Name:</strong> ${escapeHtml(nom)}</p>
    <p><strong>Company:</strong> ${escapeHtml(societe)}</p>
    <p><strong>Annual revenue:</strong> ${escapeHtml(ca)}</p>
    <p><strong>Primary objective:</strong> ${escapeHtml(objectif)}</p>
    ${message ? `<p><strong>Message:</strong></p><p>${escapeHtml(message)}</p>` : ''}
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject,
      html,
    });
    if (error) {
      return { success: false, error: 'Failed to send. Please try again or contact us by email.' };
    }
    return { success: true };
  } catch {
    return { success: false, error: 'Something went wrong. Please try again or contact us by email.' };
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
