<script setup>
import Button from "@/components/atoms/Button.vue";
import Matrix from "@/components/atoms/Matrix.vue";
import ContactLinks from "@/components/molecules/ContactLinks.vue";
import CopyToClipboard from "@/components/molecules/CopyToClipboard.vue";
import Modal from "@/components/molecules/Modal.vue";
import Section from "@/components/molecules/Section.vue";
import Footer from "@/components/organisms/Footer.vue";
import Header from "@/components/organisms/Header.vue";
import Hero from "@/components/organisms/Hero.vue";
import Main from "@/components/organisms/Main.vue";
import Projects from "@/components/organisms/Projects.vue";
import { useContent } from "@/composables/useContent";
import { computed, ref, watch } from "vue";
import DonateTabs from "../components/molecules/DonateTabs.vue";

const { title } = defineProps({
    title: String,
});

const contentState = useContent();
const content = computed(() => contentState.value.home);

watch(contentState, (value) => {
    document.title = value.home.meta.title;
});

const menu = computed(() => {
    const menu = content.value.navbar.menu;
    return Object.keys(menu).map(key => {
        const item = menu[key];
        return { name: item.name, href: "#" + item.id }
    });
});

const isModalOpen = ref(false);
</script>

<template>
<Header :menu="menu"/>
<Hero
    :title="content.hero.title"
    :text="content.hero.text"
/>
<Main>
    <Section
        :title="content.about.title"
        :id="content.navbar.menu.about.id">
        <p>{{ content.about.text }}</p>
        <Matrix/>
    </Section>

    <Section
        :title="content.projects.title"
        :id="content.navbar.menu.projects.id">
        <Projects/>
    </Section>

    <Section
        :title="content.donate.title"
        :id="content.navbar.menu.donate.id"
        >
        <p>{{ content.donate.text }}</p>

        <Button :is-ghost="true" @click="isModalOpen = true">Donate</Button>
    
        <Modal
            :title="content.donate.title"
            :open="isModalOpen"
            :onClose="() => isModalOpen = false">
            <DonateTabs/>
        </Modal>
    </Section>

    <Section
        :title="content.contact.title"
        :id="content.navbar.menu.contact.id">
        <h2>{{ content.contact.h2 }}</h2>

        <p>{{ content.contact.text }}</p>
        
        <ContactLinks :items="content.contact.links">
            <CopyToClipboard v-for="item in content.contact.clips" key="item" v-bind="item">
                {{ item.text }}
            </CopyToClipboard>
        </ContactLinks>
    </Section>
</Main>

<Footer
    :text="content.footer.text"
    :links="content.footer.links"
/>
</template>