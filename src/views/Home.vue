<script setup>
import { computed, watch } from "vue";
import Footer from "../components/Footer.vue";
import Hero from "../components/Hero.vue";
import Link from "../components/Link.vue";
import Main from "../components/Main.vue";
import Matrix from "../components/Matrix.vue";
import Navbar from "../components/Navbar.vue";
import Section from "../components/Section.vue";
import Topbar from "../components/Topbar.vue";
import { useContent } from "../composables/useContent";
import logo from "/logo.png";

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
</script>

<template>
<Topbar :text="content.topbar.text"/>
<Navbar :logo="logo" :logo-alt="content.navbar.logoAlt" :name="content.navbar.name" link="#" :menu="menu"/>
<Hero :title="content.hero.title" :text="content.hero.text"/>
<Main>
    <Section :title="content.about.title" :id="content.navbar.menu.about.id">
        <p>{{ content.about.text }}</p>

        <Matrix/>
    </Section>

    <Section :title="content.projects.title" :id="content.navbar.menu.projects.id">
        <p>{{ content.projects.text }}</p>

        <Link v-bind="content.projects.link"/>
    </Section>

    <Section :title="content.contact.title" :id="content.navbar.menu.contact.id">
        <h2>{{ content.contact.h2 }}</h2>

        <p>{{ content.contact.text }}</p>
        
        <div class="contact-links">
            <Link v-for="link of content.contact.links" v-bind="link" />
        </div>
    </Section>

</Main>

<Footer :text="content.footer.text" :links="content.footer.links"/>
</template>

<style scoped lang="stylus">
.contact-links {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 16px;

    @media (max-width: 600px) {
        gap: 8px;

        & > span {
            width: 100%;    
        }    
    }
}
</style>