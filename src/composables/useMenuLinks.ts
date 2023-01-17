import { computed } from "vue";
import { useContent } from "../plugins/content/composables/useContent";

export function useMenuLinks() {
    const { t } = useContent();
    const menuLinks = computed(() => ({
        home: { name: t({ en: 'Home', pt: 'Início' }), id: t({ en: 'home', pt: 'inicio' }) },
        about: { name: t({ en: 'About', pt: 'Sobre' }), id: t({ en: 'about', pt: 'sobre' }) },
        projects: { name: t({ en: 'Projects', pt: 'Projetos' }), id: t({ en: 'projects', pt: 'projetos' }) },
        contact: { name: t({ en: 'Contact', pt: 'Contato' }), id: t({ en: 'contact', pt: 'contato' }) },
        donate: { name: 'Donate', id: 'donate' },
    }));

    return {
        menuLinks,
    };
}