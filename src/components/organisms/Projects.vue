<script setup>
import LinkIcon from "@/components/molecules/LinkIcon.vue";
import { onBeforeMount } from "vue";
import { useGithubPinnedRepos } from "../../composables/useGithubPinnedRepos";
import { useComputedContent } from "../../plugins/content/composables/useComputedContent";
import Project from "../molecules/Project.vue";

const {
    err,
    data,
    fetchData,
    isLoading,
} = useGithubPinnedRepos();

onBeforeMount(() => {
    fetchData(["luisfloat", "inforgdev"]);
});

const { content: fetchContent } = useComputedContent((t) => ({
    err: t({ en: 'There was an error loading projects from GitHub.', pt: 'Ocorreu algum erro ao carregar os projetos do GitHub.' }),
    success: t({ en: 'Project data has been successfully fetched from GitHub.', pt: 'Os dados dos projetos foram obtidos com sucesso do GitHub.' }),
    loading: t({ en: 'Loading...', pt: 'Carregando...' }),
}));
</script>

<template>
<div class="projects">
    <p v-content="{
        en: `I'm currently in the process of building out my portfolio, but in the meantime, you can follow my progress and check out some of my work on GitHub. For more details, just click on the links below to be redirected to the respective repository on GitHub.`,
        pt: `No momento, estou construindo meu portfólio, mas, enquanto isso, você pode acompanhar meu progresso e conferir alguns de meus trabalhos no GitHub. Para mais detalhes, basta clicar nos links abaixo para ser redirecionado ao respectivo repositório no GitHub.`,
    }"/>

    <div class="data">
        <Project v-for="project, i in data" :key="i" v-bind="project"/>
    </div>

    <div class="feedback">
        <p v-if="err" class="fetch fetch--err">
            {{ fetchContent.err }}
        </p>
        <p v-else-if="isLoading">
            {{ fetchContent.loading }}
        </p>
        <p v-else class="fetch fetch--success">
            {{ fetchContent.success }}
        </p>
    </div>

    <div class="more-body">
        <span
            class="more"
            v-content="{ en: `See my full GitHub profile:`, pt: `Veja meu perfil completo do GitHub:` }"
        />

        <LinkIcon v-bind="{
            icon: 'github',
            href: 'https://github.com/luisfloat',
        }">
            luisfloat
        </LinkIcon>
    </div>

    <p v-content="{
        en: `I am always striving to improve and learn new skills, so you can check back in the future to see what I have been up to. Thank you for your interest in my work, and I hope to share more with you soon!`,
        pt: `Estou sempre me esforçando para melhorar e aprender novas habilidades, então você pode voltar no futuro para ver o que tenho feito. Obrigado pelo seu interesse em meu trabalho, e espero compartilhar mais com você em breve!`,
    }"/>
</div>
</template>

<style scope lang="stylus">
.projects {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.fetch {
    font-size: 14px;
    margin: 0;

    &--success {
        color: var(--lfds-feedback-success-color);
    }

    &--err {
        color: var(--lfds-feedback-error-color);    
    }
}

.feedback {
    display: flex;
    gap: 8px;    
}

.more-body {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start; 
    }
}

.more {
    color: var(--lfds-section-text);
}

.data {
    gap: 8px;
    display: grid;
    grid-template-columns: 33% 33% 33%;

    @media (max-width: 1000px) {
        grid-template-columns: 50% 50%;
    }

    @media (max-width: 600px) {
        grid-template-columns: 100%;
    }
}
</style>