 async function fetchProfileData() {
    const url = 'https://github.dev/Leokb0824/js-developer-portfolio/blob/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}