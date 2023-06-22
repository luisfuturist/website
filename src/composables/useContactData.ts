import { computed } from "vue";
import { useContent } from "../plugins/content/composables/useContent";

export function useContactData() {
    const { t } = useContent();
    const contact = computed(() => {
        const email = `${t({ en: "contact", pt: "contato" })}@luisfloat.com`;

        return {
            links: [
                { label: email, icon: "envelope", href: `mailto:${email}` },
                { label: "@luisfloat", icon: "linkedin", href: "https://linkedin.com/in/luisfloat" },
                { label: "+55 47 99921-6685", icon: "whatsapp", href: "https://wa.me/+5547999216685" },
            ],
            clips: [
                { label: "luisfloat#9971", icon: "discord", text: "luisfloat" },
            ],
        };
    });

    return {
        contact,
    };
}