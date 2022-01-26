<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

<ul>
    <li>Your machine needs to be ready for the latest Laravel and Node.js.</li>
</ul>

## Installation


   ```sh
    # Clone the project
    git clone https://github.com/DeveloperNx/sam-book.git

    # Enter the project directory
    cd sam-book

    # Copy env file and add your own database and mail credentials
    cp .env.example .env

    # Install dependency
    composer install

    # Generate app key
    php artisan key:generate
    
    # Migrate database
    php artisan migrate

    # Create encryption keys
    php artisan passport:install

    # Install dependency with NPM
    npm install

    # Develop
    npm run dev # or npm run watch

    # Build on production
    npm run production
    
    # Serving application
    php artisan serve

   ```

## Configuration

* Email verification is optional and it's disabled by default.
  To enable it, change the following parameter in the `.env` file
  
  `MUST_VERIFY_EMAIL=true`

* To use email verification and reset password functionality is required to set up the email service. 
  In order to successfully send emails, we need to provide `MAIL_DRIVER`, `MAIL_HOST`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD` in the `.env` file.


## Built With

* [Laravel 8](https://laravel.com)
* [Vue.js](https://vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [Bootstrap 4](https://getbootstrap.com)
* [SB Admin Template](https://github.com/StartBootstrap/startbootstrap-sb-admin-2)
* [JQuery](https://jquery.com)
* [Axios](https://github.com/axios/axios)
* [Laravel Passport](https://laravel.com/docs/8.x/passport)
* [Font Awesome 5](https://fontawesome.com/)
