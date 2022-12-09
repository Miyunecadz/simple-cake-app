
function submitFeedback() {
    if(!document.querySelector('input[name=rating]:checked')) return alert('Please select your rate')

    document.querySelector('.btn__submit').disabled = true
    document.querySelector('.spinner-container').style.display = "inline-block"
    document.getElementById('btn_txt').innerText = "Submitting...."
    setTimeout( () => {
        document.querySelector('.spinner-container').style.display = "none"
        document.getElementById('btn_txt').innerText = "Submit Feedback"
        document.querySelector('.btn__submit').disabled = false
        document.querySelector('input[name=rating]:checked').checked = false ?? false
        document.querySelector('textarea[name=comment]').value = "" ?? false
    }, 2000)
}