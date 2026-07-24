export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5551984516678"
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-90 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-burgundy text-white shadow-[0_6px_20px_rgba(0,0,0,0.4)] transition-all hover:scale-105 hover:bg-burgundy-light"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M16.02 2.667c-7.36 0-13.33 5.97-13.33 13.33 0 2.35.62 4.65 1.79 6.67L2.67 29.33l6.83-1.79a13.28 13.28 0 0 0 6.52 1.71h.01c7.36 0 13.33-5.97 13.33-13.33s-5.97-13.31-13.35-13.31zm7.83 18.87c-.33.93-1.9 1.77-2.63 1.88-.67.1-1.51.14-2.44-.15-.56-.18-1.28-.42-2.2-.82-3.87-1.67-6.4-5.55-6.6-5.81-.19-.26-1.58-2.1-1.58-4.01s1.01-2.85 1.37-3.24c.35-.39.77-.48 1.03-.48s.51 0 .74.01c.24.01.55-.09.86.66.33.79 1.11 2.72 1.21 2.92.1.19.16.42.03.68-.13.26-.19.42-.38.65-.19.23-.4.51-.57.68-.19.19-.39.4-.17.79.23.39 1 1.65 2.15 2.67 1.48 1.32 2.73 1.73 3.12 1.92.39.19.62.16.85-.1.24-.26 1-1.16 1.27-1.55.26-.39.53-.32.87-.19.35.13 2.24 1.06 2.62 1.25.39.19.65.29.74.45.1.16.1.93-.23 1.86z" />
      </svg>
    </a>
  );
}
