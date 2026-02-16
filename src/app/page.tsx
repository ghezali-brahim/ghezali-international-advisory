import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n/config';

/** Page racine : redirection vers la locale par défaut (évite 404 sur GET / et GET /fr). */
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
