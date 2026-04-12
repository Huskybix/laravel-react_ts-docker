# docker-laravel-react
Personal project utilizing React + Typescript for Frontend, Laravel for Backend and Docker for containerized development.
This project is entirely for fun and learning, with the goal to expand my skillset to include these technologies.

Below will be recorded steps I've taken in order to make it easy for anyone interested to pick up this container, mount it and take a look for themselves.

Everything has been done in a Windows environment, specifically Win10 Home.

# Docker with standard WSL2
- Install Docker Desktop
- In Powershell, navigate to the main project folder `docker-laravel`
- Adjust `.env` file to point to the database as defined in `docker-compose.yml`
- Run docker commands to start/stop container
    - Boot container: `docker-compose up -d`
    - Close container: `docker-compose down`

# Docker with Ubuntu WSL2 Integration
## This removes Windows/Linux abstraction resulting in much faster load and build times.
- Install Docker Desktop
- Install Ubuntu WSL2 image `wsl --install -d Ubuntu`
- Add Ubuntu user to Docker group `sudo usermod -aG docker $USER`
- Copy project into Ubuntu `\\wsl$\Ubuntu\home\$user\projects`
- Open Ubuntu terminal `wsl -d Ubuntu` from Powershell
- Change directory to project folder
- Run standard docker commands to start/stop container
    - Boot container: `docker-compose up -d`
    - Close container: `docker-compose down`

# Initial
- Run `docker-compose run --rm node npm install` to install Node packages

# Seeding the database

- Drop and recreate all tables empty: `docker compose exec app php artisan migrate:fresh`
- Manually run a seeder: `docker compose exec app php artisan db:seed --class=SeederFileName`
- Drop all tables and run all seeders via DatabaseSeeder: `docker compose exec app php artisan migrate:fresh --seed`

# Manual Building
- Run `docker-compose run --rm node npm run build` to build assets, Tailwind, JS, etc manually.

# Vite Server
- Run `docker-compose run --rm node npm run dev` to start a Vite development server, which will automatically generate new Tailwind classes as they're added and saved. Changes will also reflect live on the dev site.

# Accessing Site
- Go to http://localhost:8091/

# Manually Adding Users
Run Tinker: `docker compose exec app php artisan tinker`

Create users with the following format:
```php
App\Models\User::create([
    'name' => 'Admin User',
    'email' => 'admin@test.com',
    'password' => bcrypt('password'),
    'role' => 3
]);
```

Role is a sliding numerical scale:

- Standard User: 1
- Moderator: 2
- Admin: 3

# Manually Adding Products
- Run Tinker `docker-compose exec app php artisan tinker`

- Create products with the following format:
```php
App\Models\Product::create([
    'name' => 'Example Product',
    'price' => 7.99,
    'image' => 'https://placehold.co/300x300',
    'stock' => 32,
    'enabled' => true,
]);
```

# Error Fixes

- tempnam(): file created in the system's temporary directory
    - Run `docker-compose exec app chmod -R 775 /var/www/storage /var/www/bootstrap/cache` and `docker-compose exec app chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache` to fix permissions

- Can't save updates to files because of Ubuntu permissions
    - Run `sudo chown -R $USER:$USER ~/projects/docker-laravel/src` to fix permissions