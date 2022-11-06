export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email,
    }
    console.log(currentUser);

    //JWT Token
    fetch('https://genius-car-server-ten-mocha.vercel.app/jwt',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //local storage token set
            localStorage.setItem('token', data.token);
        })
}