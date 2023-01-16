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
    app: {
        topbar: {
            text: f("Check back soon for updates!", "Em breve mais atualizações!"),
        },
        navbar: {
            name: "Luis Float",
            logoAlt: "Luis Float Logo",
            menu: {
                home: { name: f("Home", "Início"), id: f("home", "inicio") },
                about: { name: f("About", "Sobre"), id: f("about", "sobre") },
                projects: { name: f("Projects", "Projetos"), id: f("projects", "projetos") },
                contact: { name: f("Contact", "Contato"), id: f("contact", "contato") },
                donate: { name: "Donate", id: "donate" },
            },
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
    views: {
        home: {
            meta: {
                title: f("Luis Float | Home", "Luis Float | Início"),
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
                    en: "I'm currently in the process of building out my portfolio, but in the meantime, you can follow my progress and check out some of my work on GitHub. For more details, just click on the links below to be redirected to the respective repository on GitHub.",
                    pt: "No momento, estou construindo meu portfólio, mas, enquanto isso, você pode acompanhar meu progresso e conferir alguns de meus trabalhos no GitHub. Para mais detalhes, basta clicar nos links abaixo para ser redirecionado ao respectivo repositório no GitHub.",
                }),
                link: { label: "luisfloat", icon: "github", href: "https://github.com/luisfloat" },
                fetch: {
                    err: f("There was an error loading projects from GitHub.", "Ocorreu algum erro ao carregar os projetos do GitHub."),
                    success: f("Project data has been successfully fetched from GitHub.", "Os dados dos projetos foram obtidos com sucesso do GitHub."),
                    loading: f("Loading...", "Carregando..."),
                },
                thanks: tl({
                    en: "I am always striving to improve and learn new skills, so you can check back in the future to see what I have been up to. Thank you for your interest in my work, and I hope to share more with you soon!",
                    pt: "Estou sempre me esforçando para melhorar e aprender novas habilidades, então você pode voltar no futuro para ver o que tenho feito. Obrigado pelo seu interesse em meu trabalho, e espero compartilhar mais com você em breve!",
                }),
                more: f("See my full GitHub profile:", "Veja meu perfil completo do GitHub:"),
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
                ],
                clips: [
                    { label: "luisfloat#9971", icon: "discord", text: "luisfloat#9971" },
                ],
            },
            donate: {
                title: "Donate",
                text: tl({
                    en: "Thank you for considering a donation! Your support helps me to continue creating and sharing content with the community. Any amount, big or small, is greatly appreciated. If you can't make this moment, please consider sharing my site with your friends and followers. Thank you for your support! Click on the button below to open a donation modal.",
                    pt: "Obrigado por considerar uma doação! Seu apoio me ajuda a continuar criando e compartilhando conteúdo com a comunidade. Qualquer quantia, grande ou pequena, é muito apreciada. Se não puder doar neste momento, considere compartilhar meu site com seus amigos e seguidores. Obrigado pelo seu apoio! Clique no botão abaixo para abrir um modal de doação.",
                }),
                key: f("Key", "Chave"),
                items: {
                    "Pix": {
                        name: "Pix",
                        key: "(47) 99921-6685",
                    },
                    "XNO": {
                        name: "Nano",
                        key: "nano_3ke34tcxrqz38s91dw8stxdoqodwffmar34txn7hh9tfbw9r4y6mxyz85iey",
                    },
                    "XMR": {
                        name: "Monero",
                        key:  "4A6M81P8WuKM26cMCcuRXSFKZsLcUEjWNYfCRErffw9qLguwMLcnNjdHNs8QDJAsg1J4zhTR9hkszMcg2duRAa5p76usJPM",
                    },
                    "BTC": {
                        name: "Bitcoin",
                        key: "1Bfrd9aRgtQXmoSoPaRpKqWa1YLFmgGXTw",
                    },
                    "ETH": {
                        name: "Ether",
                        key: "0x291AC43629ac7BFD514d0251aab6c1099B052571",
                    },
                },
            },
        },
    },
});