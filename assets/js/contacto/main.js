const mayusRexEx = /[A-Z]/g

const form = document.forms.form
const formButton = document.getElementById('formButton')


const resetIcon = (checkIcon, errorIcon) => {
    checkIcon.style.opacity = '0%'
    errorIcon.style.opacity = '0%'
}

const activateCheckIcon = (checkIcon, errorIcon) => {
    checkIcon.style.opacity = '100%'
    errorIcon.style.opacity = '0%'
}

const activateErrorIcon = (checkIcon, errorIcon) => {
    checkIcon.style.opacity = '0%'
    errorIcon.style.opacity = '100%'
}



const nameHandleKeyUp = (e, id) => {

    const name = e.target.value
    const length = name.match(mayusRexEx)

    const checkIcon = document.getElementById(`${id}-check`)
    const errorIcon = document.getElementById(`${id}-error`)

    if (name.length <= 4)
        resetIcon(checkIcon, errorIcon)

    if (name.length > 4 && length !== null)
        activateCheckIcon(checkIcon, errorIcon)

    if (name.length > 4 && length === null)
        activateErrorIcon(checkIcon, errorIcon)
}



const emailHandleKeyUp = (e) => {

    const email = e.target.value

    const checkIcon = document.getElementById(`email-check`)
    const errorIcon = document.getElementById(`email-error`)

    const haveDotCom = email.includes('.com')
    const haveDotNet = email.includes('.net')
    const haveDotOrg = email.includes('.org')
    const haveAt = email.indexOf('@') >= 0

    if (email.length <= 4)
        resetIcon(checkIcon, errorIcon)

    else
        email.length > 4 && haveAt && (haveDotCom || haveDotNet || haveDotOrg)
            ? activateCheckIcon(checkIcon, errorIcon)
            : activateErrorIcon(checkIcon, errorIcon)
}



const formButtonHandleClick = (e) => {

    e.preventDefault()

    const { firstname, lastname, email, age, message } = form

    const formData = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        age: age.value,
        message: message.value
    }

    console.log(formData)
    // fetch('api/v2/recibomiform', { body: JSON.stringify(formData), method: 'POST' })
}



form.firstname.addEventListener('keyup', e => nameHandleKeyUp(e, 'firstname'))
form.lastname.addEventListener('keyup', e => nameHandleKeyUp(e, 'lastname'))
form.email.addEventListener('keyup', emailHandleKeyUp)
formButton.addEventListener('click', formButtonHandleClick)