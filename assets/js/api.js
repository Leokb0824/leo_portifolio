
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Leokb0824/leo_portifolio/refs/heads/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
