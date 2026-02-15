/** Compatible Next 14 (params sync) et Next 15 (params Promise) */
export async function resolveParams<T extends Record<string, string>>(
  params: T | Promise<T>
): Promise<T> {
  return typeof (params as Promise<T>).then === 'function' ? (await params) : params;
}
