function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.querySelector('.login-btn').style.display = 'none';
    document.querySelector('.navbar').innerHTML += `
        <div class="user-profile">
            <img src="${profile.getImageUrl()}" alt="User Image" class="user-img">
            <span>${profile.getName()}</span>
            <button onclick="signOut()">Logout</button>
        </div>
    `;
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        window.location.reload();
    });
}
