/**
 * S'exécute au démarrage du serveur Next (après le bootstrap).
 * En dev, tu devrais voir "[instrumentation] register" dans la console
 * une fois que le serveur a fini de démarrer.
 */
export async function register() {
  if (process.env.NODE_ENV === 'development') {
    console.log('[instrumentation] register() - serveur Next prêt');
  }
}
