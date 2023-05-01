export const notify = (text) => {
    const elm = document.createElement('span');
    elm.innerText = `Unable to find "${text}" in Weather api`
    elm.className = 'notification'
    document.body.appendChild(elm);
    setTimeout(function(){elm.remove()},5000)
}
