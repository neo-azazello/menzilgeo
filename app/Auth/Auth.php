<?php

namespace App\Auth;

use App\Models\User;

class Auth
{
    public function user()
    {
        if (isset($_SESSION['user'])) {
            return User::find($_SESSION['user']);
        } else {
            return null;
        }
    }

    public function check()
    {
        return isset($_SESSION['user']);
    }

    public function attempt($username, $password)
    {
        $user = User::where('username', $username)->first();
        if (!$user) {
            return false;
        }

        if (password_verify($password, $user->userpassword)) {

            $_SESSION['user'] = $user->userid;
            $_SESSION['username'] = $user->username;

            return true;
        }

        return false;
    }

    public function logout()
    {

        unset($_SESSION['user']);
        unset($_SESSION['username']);

    }
}
