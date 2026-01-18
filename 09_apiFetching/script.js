const XHR = new XMLHttpRequest();
const url = "https://api.github.com/users/princebishtcodes";
XHR.open('GET', url);

XHR.onreadystatechange = function () {
    // practical usecase
    if(XHR.readyState === 4){
        const data = JSON.parse(this.responseText);
        console.log(typeof data);
        // (IMP)we always get string, if we fetch api
        // we need to convert it inot JSON using JSON.parse
        
        // here .this is in this context and responseText gives us the response from api...
    }
    console.log(XHR.readyState);
}
// In .open we have to give a request which can be get or post, and api url...
XHR.send();
