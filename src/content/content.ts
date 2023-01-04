import { ContentType, LangValue, TlType } from "../types/content";

export type SimpleLangType = "en" | "pt";
export type SimpleFType = (en: LangValue, pt: LangValue) => object;
export type SimpleContentType = ContentType<SimpleLangType, SimpleFType>;

export const f = (tl: TlType<SimpleLangType>, en: object, pt: object) => tl({en, pt});
export const langsAvailable = [ "en", "pt" ];
export const defaultLang = "en";

export const content: SimpleContentType = (tl, f) => ({
    components: {
        languageSelector: {
            en: f("English", "Inglês"),
            pt: f("Portuguese", "Português"),
        },
        themeSelector: {
            dark: f("Dark", "Escuro"),
            light: f("Light", "Claro"),
        },
        linkFeedback: {
            copiedStart: f("Copied ", "Copiado "),
            copiedEnd: f(" to clipboard", " para clipboard"),
        },
    },
    home: {
        meta: {
            title: f("Luis Float | Home", "Luis Float | Início"),
        },
        topbar: {
            text: f("Check back soon for updates!", "Em breve mais atualizações!"),
        },
        navbar: {
            name: "Luis Float",
            logoAlt: "Luis Float Logo",
            menu: {
                home: { name: f("Home", "Início"), id: f("", "") },
                about: { name: f("About", "Sobre"), id: f("about", "sobre") },
                projects: { name: f("Projects", "Projetos"), id: f("projects", "projetos") },
                contact: { name: f("Contact", "Contato"), id: f("contact", "contato") },
            },
        },
        hero: {
            title: "Luis Float",
            text: f("Hi, my name is", "Olá, meu nome é"),
        },
        about: {
            title: f("About", "Sobre Mim"),
            text: tl({
                en: "Hi there! My name is Luis \"Float\" Emidio and I am a self-taught full stack web developer with a vocation in the JavaScript ecosystem. In my free time, I love exploring the world of science fiction and digital design, and I am particularly drawn to the cyberpunk genre and futurology. Technology and its impact on the world have always fascinated me, and I enjoy diving deep into philosophical discussions about the future. When I'm not coding or nerding out about the latest tech trends, you can find me tinkering with software or experiencing a work of sci-fi art.",
                pt: "Olá! Meu nome é Luis \"Float\" Emidio e sou um desenvolvedor web full stack autodidata com vocação no ecossistema JavaScript. No meu tempo livre, adoro explorar o mundo da ficção científica e do design digital, e sou particularmente atraído pelo gênero cyberpunk e pela futurologia. A tecnologia e seu impacto no mundo sempre me fascinaram, e gosto de mergulhar fundo em discussões filosóficas sobre o futuro. Quando não estou programando ou falando sobre as últimas tendências tecnológicas, você pode me encontrar mexendo em software ou experimentando uma obra de arte de ficção científica.",
            }),
        },
        projects: {
            title: f("Projects", "Projetos"),
            text: tl({
                en: "I'm currently in the process of building out my portfolio, but in the meantime, you can follow my progress and check out some of my work on GitHub. Just click the link below to be redirected to my profile. I am always striving to improve and learn new skills, so you can check back in the future to see what I have been up to. Thank you for your interest in my work, and I hope to share more with you soon!",
                pt: "No momento, estou construindo meu portfólio, mas, enquanto isso, você pode acompanhar meu progresso e conferir alguns de meus trabalhos no GitHub. Basta clicar no link abaixo para ser redirecionado ao meu perfil. Estou sempre me esforçando para melhorar e aprender novas habilidades, então você pode voltar no futuro para ver o que tenho feito. Obrigado pelo seu interesse em meu trabalho, e espero compartilhar mais com você em breve!",
            }),
            link: { label: "luisfloat", icon: "github", href: "https://github.com/luisfloat", ghost: true },
        },
        contact: {
            title: f("Contact", "Contato"),
            h2: tl({
                en: "Thank you for visiting my website! If you have any questions, comments, or just want to say hi, please don't hesitate to reach out at any of the social media sites below. I would love to hear from you, and I'm always open to connecting with new people.",
                pt: "Obrigado por visitar meu site! Se você tiver alguma dúvida, comentário ou apenas quiser dizer oi, não hesite em entrar em contato com qualquer uma das redes sociais abaixo. Eu adoraria ouvir de você, e estou sempre aberto para me conectar com novas pessoas.",
            }),
            text: f("Let's chat!", "Bora conversar!"),
            links: [
                { label: `${f("contact", "contato")}@luisfloat.com`, icon: "envelope", href: `mailto:${f("contact", "contato")}@luisfloat.com` },
                { label: "@luisfloat", icon: "linkedin", href: "https://linkedin.com/in/luisfloat" },
                { label: "+55(47)99921-6685", icon: "whatsapp", href: "https://wa.me/+5547999216685" },
                { label: "luisfloat#9971", icon: "discord", href: "luisfloat#9971", copy: true },
            ],
        },
        footer: {
            text: f("Design and Code by Luis Float", "Design e Code por Luis Float"),
            links: [
                { icon: 'twitter', href: 'https://twitter.com/luisfloat' },
                { icon: 'linkedin', href: 'https://linkedin.com/in/luisfloat' },
                { icon: 'github', href: 'https://github.com/luisfloat' },
            ],
        },
    },
});