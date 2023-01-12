import axios from 'axios';
import { computed, ref } from 'vue';

function fetchPinnedRepos(username, cb) {
    const URL = `https://api.github.com/users/${username}/repos`;

    axios.get(URL)
        .then(({data}) => {
            let repos = [];

            for(let repo of data) {
                if(!repo.topics || !repo.topics?.includes("public")) {
                    continue;
                }

                repos.push({
                    name: repo.name,
                    description: repo.description,
                    website: repo.homepage,
                    keywords: repo.topics.filter(topic => topic != "public"),
                    account: username,
                });
            };

            try {
                [...repos];
            } catch (e) {
                cb(e, null);
            }

            cb(null, repos);
        }).catch((e) => {
            cb(e, null);
        });
}

export function useGithubPinnedRepos() {
    const data = ref([]);
    const err = ref(undefined);
    const isLoading = ref(null);

    const handleFetch = (username) => {
        fetchPinnedRepos(username, (er, repos) => {
            if(er) {
                err.value = er;
            } else {
                data.value = [...data.value, ...repos];
            }

            isLoading.value--;
        });
    };
    const fetchData = (accounts) => {
        if(!Array.isArray(accounts)) {
            handleFetch([accounts]);
            return;
        }

        isLoading.value = accounts.length;

        accounts.forEach(account => handleFetch(account));
    };
    
    return {
        isLoading: computed(() => isLoading.value !== 0),
        data,
        err,
        fetchData,
    };
}