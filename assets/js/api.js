 async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Leokb0824/leo_portifolio/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}