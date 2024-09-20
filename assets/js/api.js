 async function fetchProfileData() {
    const url = 'https://github.com/Leokb0824/leo_portifolio/blob/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}