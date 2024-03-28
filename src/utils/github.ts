export type Repo = {
  name: string;
  description: string;
  website: string;
  keywords: string[];
  account: string;
  html_url: string;
  updated_at: string;
}

export async function getPinnedRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      'Authorization': `Bearer ${import.meta.env.GH_API_TOKEN}`
    }
  });
  const data = await res.json();
  
  if(!res.ok) {
    throw new Error(data.message)
  }

  const repos: Repo[] = [];

  for (let repo of data) {
    if (!repo.topics || !repo.topics?.includes("public")) {
      continue;
    }

    repos.push({
      html_url: repo.html_url,
      updated_at: repo.updated_at,
      name: repo.name,
      description: repo.description,
      website: repo.homepage,
      keywords: repo.topics.filter((topic: string) => topic != "public"),
      account: username,
    });
  };

  return repos;
}

/* export function useGithubPinnedRepos() {
  const data = ref([]);
  const err = ref(undefined);
  const isLoading = ref(null);

  const handleFetch = (username) => {
    fetchPinnedRepos(username, (er, repos) => {
      if (er) {
        err.value = er;
      } else {
        data.value = [...data.value, ...repos];
      }

      isLoading.value--;
    });
  };
  const fetchData = (accounts) => {
    if (!Array.isArray(accounts)) {
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
} */