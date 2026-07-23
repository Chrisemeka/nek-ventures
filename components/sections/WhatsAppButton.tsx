import { siteConfig } from "@/site.config";

export function WhatsAppButton() {
  const { whatsapp, whatsappPrefilledMessage } = siteConfig.contact;
  if (!whatsapp) return null;

  const number = whatsapp.replace(/[^0-9]/g, "");
  const text = whatsappPrefilledMessage ?? "";
  const href = `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition hover:scale-105"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="#fff"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.68.888.888 0 2.694-.53 3.024-1.404.115-.302.115-.573.086-.87-.014-.14-.5-.4-1.147-.687z"/>
        <path d="M16.008 4C9.401 4 4 9.401 4 16.008c0 2.234.616 4.416 1.79 6.306L4 28l5.827-1.79A11.964 11.964 0 0 0 16.008 28C22.615 28 28 22.615 28 16.008 28 9.401 22.615 4 16.008 4zm0 21.796a9.762 9.762 0 0 1-5.155-1.47l-.372-.229-3.6 1.108 1.108-3.514-.243-.386a9.784 9.784 0 0 1-1.502-5.212c0-5.398 4.394-9.792 9.792-9.792 5.398 0 9.792 4.394 9.792 9.792 0 5.398-4.394 9.792-9.792 9.792z"/>
      </svg>
    </a>
  );
}
