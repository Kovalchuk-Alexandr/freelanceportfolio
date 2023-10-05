let projectId = localStorage.getItem('projectId');

const item = projects[projectId];

let  title = item.title;
let desc = item.desc;
let img = item.imgBig;

document.querySelector('.project-detailes .title-1').innerHTML = title;
document.querySelector('.project-detailes__desc p').innerHTML = desc;
document.querySelector('.project-detailes__cover').setAttribute('src', `./img/projects/${img}`);
