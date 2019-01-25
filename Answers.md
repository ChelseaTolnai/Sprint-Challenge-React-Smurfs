Q.  Explain the differences between `client-side routing` and `server-side routing`.

A:  Server side routing is when a user requests information to be displayed to the page (such by clicking a link to change URL), then the server and the server alone handles this request by receiving the request, sending the request to the server, finding the information within the server, sending the requested information/html back through the web to the user. This approach causes the website to always refresh upon the request being received. Another side effect to server side routing is that this process can be very slow if a lot of information is being requested. On the other hand if a small amount of information is being requested it can be a much faster approach because only smaller portions of the full webpage are loaded at a time. 

In contrast, client side routing is when this similar information routing is handled internally by the JavaScript through the application and browser instead of relying on the server to process information requests. When using this approach the entire webpage is loaded at once and the URL changes occur by instead switching to different predetermined coded components and routes through state and interpolation. This means that the webpage does not have to automatically refresh upon information requests which is an overall faster routing system.

Q.  What does HTTP stand for?
A:  HyperText Transfer Protocol

Q.  What does CRUD stand for?
A:  Create, Read, Update, Delete

Q.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
A:  CRUD        HTTP Method     function
    Create:     POST            Request to create/add new data
    Read:       GET             Request to read/access specified data
    Update:     PUT             Request to update/change specific data
    Delete:     DELETE          Request to delete/remove specific data

Q.  Mention three tools we can use to make AJAX requests
A:  Fetch API, XMLHttpRequest, Libraries such as Axios