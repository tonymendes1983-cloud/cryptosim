// Réglages du site. Tant que supabaseUrl est vide, le site marche sans comptes (comme avant).
window.CS_CONFIG = {
  supabaseUrl: '',        // ex : https://xxxx.supabase.co   (Supabase > Project Settings > API)
  supabaseKey: '',        // clé publique "anon" ou "publishable" (jamais la clé secrète !)
  stripeLink: '',         // lien de paiement Stripe de l'abonnement Pro (Payment Link)
  stripePortal: '',       // lien du portail client Stripe (pour résilier)
  proPrice: '2,99 €',     // prix affiché, doit être le même que dans Stripe
  freeAlerts: 5,          // doit être le même que dans supabase/schema.sql
  proAlerts: 30
};
