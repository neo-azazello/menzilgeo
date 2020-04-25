<?php

use Slim\App;

date_default_timezone_set('Asia/Baku');
//require the main Slim 3 Framework file and dependency files

require __DIR__ . "/vendor/autoload.php";

//Starting new session in our application
session_start();

//load Slim 3 settings
$settings = require __DIR__ . "/config/settings.php";

//Instantiate Slim Framework instance.
$app = new App($settings);

//Adding dependencies
require __DIR__ . "/config/init.php";

//require the routing file
require __DIR__ . "/config/routes.php";

$app->run();