# MATEMBEZI APP

# PROBLEM STATEMENT
Lack of a central place to research for trips and tours

People travel everyday. And researching for places to go can be a real headache. Matembezi app and API looks to solve this.
It will be a central location where tour companies will pay for their tours to be posted. 


# REST API ARCHITECTURE
* 1) Uniform Interface
For decoupling a client from a server, REST API adheres to offering a uniform interface that allows for independent application development without having the application’s services, models, or actions tightly linked to the API layer. The uniform interface allows the client to communicate with the server in a single language, regardless of the backend architecture of either. This design concept simplifies the overall system architecture and improves communication visibility while also preventing self or multiple interfaces within an API. 
Identification of resources, resource management through representations, self-descriptive communications, and hypermedia as the engine of the application state, are the four interface constraints that constitute REST.
* 2) Client-Server Separation
This design approach is founded on the notion that client and server should be separated and allowed to grow independently of one another. The communication between them is limited to requests initiated by the client and responses sent to the client as a reaction to a request. Users may enhance manageability and scalability across many platforms by simplifying server components since user interface issues are separated from data storage problems.
* 3) Stateless
REST APIs are stateless, which implies that the server keeps no information on the user who uses the API. The requests sent from a client to a server will include all of the necessary information for the server to comprehend the client’s requests. This can be part of the URL, query-string arguments, content, headers, API key, access token, user ID, and so on. It also permits lower memory use and scalability of the user’s application.
* 4) Layered
The architecture of a REST API consists of various layers that work together to form a hierarchy that aids in the creation of a more scalable and adaptable application. It is possible to put critical and more susceptible elements of server architecture behind a firewall, prohibiting direct interaction with them by the client, by using a layered system with a proxy, or providing a single point of access. It also balances loads and provides shared caches to help with scalability.
* 5) Code on Demand
This is an optional constraint as an API can be RESTful even if it does not provide code on demand. It enables the transmission of code or applets for usage within the application via the API. This reduces the number of features that must be pre-implemented, which benefits clients.


