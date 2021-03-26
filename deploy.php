<?php
namespace Deployer;

require 'recipe/laravel.php';

// Project name
set('application', 'chirping-api');

// Project repository
set('repository', 'git@github.com:evansmithconsulting/api-4xxi.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server 
add('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts
inventory('config/deployer_hosts.yml');
    
// Tasks

//task('build', function () {
//    run('cd {{release_path}} && build');
//});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

//before('deploy:symlink', 'artisan:migrate');

/**
 * Main task
 */
desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
//    'deploy:vendors',
//    'deploy:writable',
//    'artisan:storage:link',
//    'artisan:view:cache',
//    'artisan:config:cache',
//    'artisan:optimize',
//    'deploy:docker-compose-stop',
//    'deploy:docker-compose-up',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
]);