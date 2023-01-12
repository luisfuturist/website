<script setup>
import LinkIcon from "@/components/molecules/LinkIcon.vue";
import { computed, onBeforeMount } from "vue";
import { useContent } from "../../composables/useContent";
import { useGithubPinnedRepos } from "../../composables/useGithubPinnedRepos";
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

const contentState = useContent();
const content = computed(() => contentState.value.home.projects);
</script>

<template>
<div class="projects">
    <p>{{ content.text }}</p>

    <div class="data">
        <Project v-for="project, i in data" :key="i" v-bind="project"/>
    </div>

    <div class="feedback">
        <p v-if="err" class="fetch fetch--err">
            {{ content.fetch.err }}
        </p>
        <p v-else-if="isLoading">
            {{ content.fetch.loading }}
        </p>
        <p v-else class="fetch fetch--success">
            {{ content.fetch.success }}
        </p>
    </div>

    <div class="more-body">
        <span class="more">{{ content.more }}</span>

        <LinkIcon v-bind="content.link">
            {{ content.link.label }}
        </LinkIcon>
    </div>

    <p>{{ content.thanks }}</p>
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