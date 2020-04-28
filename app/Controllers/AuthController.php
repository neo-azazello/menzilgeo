<?php

namespace App\Controllers;

class AuthController extends BaseController
{

    public function getSignIn($request, $response)
    {
        return $this->view->render($response, 'admin/login.twig');
    }

    public function postSignIn($request, $response)
    {
        $auth = $this->auth->attempt(
            $request->getParam('username'),
            $request->getParam('userpassword')
        );

        if (!$auth) {
            return $response->withRedirect($this->router->pathFor('admin.login'));
        }
        return $response->withRedirect($this->router->pathFor('posts'));
    }

    public function getSignOut($request, $response)
    {
        $this->auth->logout();
        return $response->withRedirect($this->router->pathFor('admin.login'));
    }
}
