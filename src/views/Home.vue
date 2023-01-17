<script setup>
import Button from "@/components/atoms/Button.vue";
import Matrix from "@/components/atoms/Matrix.vue";
import ContactLinks from "@/components/molecules/ContactLinks.vue";
import CopyToClipboard from "@/components/molecules/CopyToClipboard.vue";
import Modal from "@/components/molecules/Modal.vue";
import Section from "@/components/molecules/Section.vue";
import Hero from "@/components/organisms/Hero.vue";
import Main from "@/components/organisms/Main.vue";
import Projects from "@/components/organisms/Projects.vue";
import { ref } from "vue";
import DonateTabs from "../components/molecules/DonateTabs.vue";
import { useContactData } from "../composables/useContactData";
import { useDonateData } from "../composables/useDonateData";
import { useMenuLinks } from "../composables/useMenuLinks";
import { useContent } from "../plugins/content/composables/useContent";

const isModalOpen = ref(false);

const { t } = useContent();
const { menuLinks } = useMenuLinks();
const { contact: contactItems } = useContactData();
const { donateItems } = useDonateData();
</script>

<template>
<Hero v-bind="{
    id: menuLinks.home.id,
    title: 'Luis Float',
    text: t({ en: 'Hi, my name is', pt: 'Olá, meu nome é' }),
}"/>
<Main>
    <Section v-bind="{
        id: menuLinks.about.id,
        title: t({ en: 'About', pt: 'Sobre Mim' }),
    }">
        <p v-content="{
            en: `Hi there! My name is Luis &quot;Float&quot; Emidio and I am a self-taught full stack web developer with a vocation in the JavaScript ecosystem. In my free time, I love exploring the world of science fiction and digital design, and I am particularly drawn to the cyberpunk genre and futurology. Technology and its impact on the world have always fascinated me, and I enjoy diving deep into philosophical discussions about the future. When I'm not coding or nerding out about the latest tech trends, you can find me tinkering with software or experiencing a work of sci-fi art.`,
            pt: `Olá! Meu nome é Luis &quot;Float&quot; Emidio e sou um desenvolvedor web full stack autodidata com vocação no ecossistema JavaScript. No meu tempo livre, adoro explorar o mundo da ficção científica e do design digital, e sou particularmente atraído pelo gênero cyberpunk e pela futurologia. A tecnologia e seu impacto no mundo sempre me fascinaram, e gosto de mergulhar fundo em discussões filosóficas sobre o futuro. Quando não estou programando ou falando sobre as últimas tendências tecnológicas, você pode me encontrar mexendo em software ou experimentando uma obra de arte de ficção científica.`,
        }"/>
        <Matrix/>
    </Section>

    <Section v-bind="{
        id: menuLinks.projects.id,
        title: t({ en: 'Projects', pt: 'Projetos' }),
    }">
        <Projects/>
    </Section>

    <Section v-bind="{
        id: menuLinks.donate.id,
        title: 'Donate',
    }">
        <p v-content="{
            en: `Thank you for considering a donation! Your support helps me to continue creating and sharing content with the community. Any amount, big or small, is greatly appreciated. If you can't make this moment, please consider sharing my site with your friends and followers. Thank you for your support! Click on the button below to open a donation modal.`,
            pt: `Obrigado por considerar uma doação! Seu apoio me ajuda a continuar criando e compartilhando conteúdo com a comunidade. Qualquer quantia, grande ou pequena, é muito apreciada. Se não puder doar neste momento, considere compartilhar meu site com seus amigos e seguidores. Obrigado pelo seu apoio! Clique no botão abaixo para abrir um modal de doação.`,
        }"/>

        <Button :is-ghost="true" @click="isModalOpen = true">
            Donate
        </Button>
    
        <Modal
            title="Donate"
            :open="isModalOpen"
            :onClose="() => isModalOpen = false">
            <DonateTabs :items="donateItems"/>
        </Modal>
    </Section>

    <Section v-bind="{
        id: menuLinks.contact.id,
        title: t({ en: 'Contact', pt: 'Contato' })
    }">
        <h2 v-content="{
            en: `Thank you for visiting my website! If you have any questions, comments, or just want to say hi, please don't hesitate to reach out at any of the social media sites below. I would love to hear from you, and I'm always open to connecting with new people.`,
            pt: `Obrigado por visitar meu site! Se você tiver alguma dúvida, comentário ou apenas quiser dizer oi, não hesite em entrar em contato com qualquer uma das redes sociais abaixo. Eu adoraria ouvir de você, e estou sempre aberto para me conectar com novas pessoas.`,
        }"/>

        <p v-content="{ en: `Let's chat!`, pt: `Bora conversar!` }"/>
        
        <ContactLinks :items="contactItems.links">
            <CopyToClipboard v-for="item in contactItems.clips" key="item" v-bind="item">
                {{ item.text }}
            </CopyToClipboard>
        </ContactLinks>
    </Section>
</Main>
</template>