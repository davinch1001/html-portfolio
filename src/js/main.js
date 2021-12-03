const skill = [
    {title: 'JavaScript', icons: '<i class="fab fa-js-square"></i>'},
    {title: 'Node.js', icons: '<i class="fab fa-node"></i>'},
    {title: 'React', icons: '<i class="fab fa-react"></i>'},
    {title: 'HTML', icons: ' <i class="fab fa-html5"></i>'},
    {title: 'CSS', icons: '<i class="fab fa-css3-alt"></i>'},
    {title: 'Sass', icons: '<i class="fab fa-sass"></i>'},
    {title: 'GitHub', icons: '<i class="fab fa-github"></i>'},
    {title: 'MongoBD', icons: '<i class="fas fa-database"></i>'},
]


skill.map((el) => {
    const skillBlock = document.createElement('div')
    skillBlock.classList.add('skills__skill')
    document.querySelector('.skills__block').appendChild(skillBlock)
    const skillTitle = document.createElement('span')
    const skillIcon = document.createElement('span')
    skillTitle.classList.add('skill-title')
    skillIcon.classList.add('skill-icon')
    skillIcon.innerHTML = `${el.icons}`
    skillTitle.innerHTML = `${el.title}`
    skillBlock.appendChild(skillIcon)
    skillBlock.appendChild(skillTitle)
})
