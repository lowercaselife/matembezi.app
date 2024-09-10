# Matembezi App

## Overview
Matembezi is a centralized platform aimed at simplifying travel planning. It provides a space where tour companies can list their tours for users, making trip research easier and more accessible.

## Features
- **Tour Listings**: Centralized location for viewing and researching tour options.
- **API-Driven**: Includes a RESTful API architecture to support independent client-server development.
- **Seamless Integration**: Designed with a client-server separation for scalable development.

## REST API Architecture
1. **Uniform Interface**: Decouples clients from servers.
2. **Client-Server Separation**: Independent growth of client and server components.
3. **Stateless**: All necessary information is contained within requests.
4. **Layered System**: Enhances scalability with load balancing and proxy access.
5. **Code on Demand** (optional): Allows transmission of code via API for dynamic application features.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript, Pug.
- **Backend**: Node.js with Express framework.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lowercaselife/matembezi.app.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm start
   ```

## Contributing
Feel free to submit issues or pull requests to contribute to the project.

## License
[MIT License](LICENSE)
