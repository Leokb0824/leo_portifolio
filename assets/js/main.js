function updateProfileInfo(profileData) {
    const photo = document.('profile.photo')
    console.log(photo)
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)    
})()