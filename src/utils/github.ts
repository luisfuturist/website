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
      'Authorization': `Bearer ${import.meta.env.GH_API_TOKEN}`,
      'User-Agent': 'request',
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
