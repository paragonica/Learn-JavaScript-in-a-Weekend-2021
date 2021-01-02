// function successHandler(result) {
//     console.log("I think my promise resolved, success!", result);
// }
// function failureHandler(error) {
//     console.log("I think my promise rejected, failure!", error);
// }
// function finallyHander() {
//     console.log("success or failure, I always execute!");
// }
// const myPromise = new Promise(function(resolve, reject) {
//     const randomNumber = (Math.random() * 100).toFixed(0);

//     if (randomNumber % 2 === 0) {
//         resolve("Number IS divisible by 2: " + randomNumber);
//     } else {
//         reject("Number NOT divisible by 2: " + randomNumber);
//     }
// });
// myPromise
//     .then(successHandler)
//     .catch(failureHandler)
//     .finally(finallyHander);

function getUserData(url) {
    return new Promise(function(resolve, reject) {
        if (url.indexOf("http") === 0) {
            resolve("data retrieved");
        } else {
            reject("something went wrong");
        }
    });
}
function loginUser(userUrl) {
    getUserData(userUrl)
        .then(function(data) {
            console.log(data);
        })
        .catch(function(error) {
            console.log(error);
        });
}
loginUser("http://www.fakesite.com?user=bsmith");
loginUser("htp://www.fakesite.com?user=bsmith");