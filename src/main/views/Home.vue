<script setup>
import Footer from "../components/Footer.vue";
import Hero from "../components/Hero.vue";
import Link from "../components/Link.vue";
import Main from "../components/Main.vue";
import Matrix from "../components/Matrix.vue";
import Navbar from "../components/Navbar.vue";
import Section from "../components/Section.vue";
import Topbar from "../components/Topbar.vue";
import logo from "/logo.png";

const { title } = defineProps({
    title: String,
});

const menu = [
    { name: 'Home', href: '#' },
    { name: 'About Me', href: '#about-me' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
];
</script>

<template>
<Topbar text="WIP. Check back soon for updates!"/>
<Navbar :logo="logo" name="Luis Float" link="#" :menu="menu"/>
<Hero title="Luis Float" text="Hi, my name is"/>
<Main>
    <Section title="About" id="about-me">
        <p>Hi there! My name is Luis "Float" Emidio and I am a self-taught full stack web developer with a vocation in the JavaScript ecosystem. In my free time, I love exploring the world of science fiction and digital design, and I am particularly drawn to the cyberpunk genre and futurology. Technology and its impact on the world have always fascinated me, and I enjoy diving deep into philosophical discussions about the future. When I'm not coding or nerding out about the latest tech trends, you can find me tinkering with software or experiencing a work of sci-fi art.</p>

        <Matrix/>
    </Section>

    <Section title="Projects" id="projects">
        <p>I'm currently in the process of building out my portfolio, but in the meantime, you can follow my progress and check out some of my work on GitHub. Just click the link below to be redirected to my profile. I am always striving to improve and learn new skills, so you can check back in the future to see what I have been up to. Thank you for your interest in my work, and I hope to share more with you soon!</p>

        <Link label="luisfloat" icon="github" href="https://github.com/luisfloat" :ghost="true"/>
    </Section>

    <Section title="Contact" id="contact">
        <h2>Thank you for visiting my website! If you have any questions, comments, or just want to say hi, please don't hesitate to reach out at any of the social media sites below. I would love to hear from you, and I'm always open to connecting with new people. </h2>

        <p>Let's chat!</p>
        
        <div class="contact-links">
            <Link label="contact@luisfloat.com" icon="envelope" href="mailto:contact@luisfloat.com"/>
            <Link label="@luisfloat" icon="linkedin" href="https://linkedin.com/in/luisfloat"/>
            <Link label="+55(47)99921-6685" icon="whatsapp" href="https://wa.me/+5547999216685"/>
            <Link label="luisfloat#9971" icon="discord" href="luisfloat#9971" :copy="true"/>
        </div>
    </Section>

</Main>

<Footer text="Design and Code by Luis Float"/>
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