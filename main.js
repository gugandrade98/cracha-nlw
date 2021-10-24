// Regra de definição de variaveis: let ou const
// valor de i = i + 1 <<>> Javascript form fast <<>> i++

const linksSocialMedia = {
  github: 'gugandrade98',
  youtube: 'UCZ76g1unqcRYx_n_N-gL6aA',
  facebook: 'gustavo.vitorinoandrade',
  instagram: 'gugandrade98',
  twitter: 'gugandrade98'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].hef = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHub.href = data.html_url
      userProfileSelf.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfo()
