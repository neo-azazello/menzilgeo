<?php

namespace App\Controllers;

use App\Models\PageModel;
use Slim\Http\Request;
use Slim\Http\Response;

class AdminController extends BaseController
{
    public function viewPosts(Request $request, Response $response)
    {
        $posts = PageModel::get();
        return $this->container->view->render($response, '/admin/pages/posts.twig', compact('posts'));
    }

    public function addNewPostPage(Request $request, Response $response)
    {
        return $this->container->view->render($response, '/admin/pages/postadd.twig');
    }

    public function createNewPost(Request $request, Response $response)
    {
        PageModel::create([
            'category' => $request->getParam('category'),
            'pagetitle' => $request->getParam('pagetitle'),
            'pagetext' => $request->getParam('pagetext')
        ]);
        return $response->withRedirect($this->router->pathFor("posts"));
    }

    public function editPostPage(Request $request, Response $response, $args)
    {
        $post = PageModel::where(['pageid' => $args['id']])->first();
        return $this->container->view->render($response, '/admin/pages/postedit.twig', compact('post'));
    }

    public function updatePostData(Request $request, Response $response)
    {
        PageModel::where(['pageid' => $request->getParam('pageid')])->update([
            'category' => $request->getParam('category'),
            'pagetitle' => $request->getParam('pagetitle'),
            'pagetext' => $request->getParam('pagetext')
        ]);
        return $response->withRedirect($this->router->pathFor("posts"));
    }


    public function sendEmail(Request $request, Response $response)
    {
        $sendername = $request->getParam('name');
        $senderemail = $request->getParam('email');
        $sendersubject = $request->getParam('subject');
        $sendermessage = $request->getParam('comments');

        $to = '000-2011-00@mail.ru';
        $subject = $sendersubject;
        $message = 'Имя отправителя: ' . $sendername . "\r\n" . 'Почта отправителя: ' . $senderemail . "\r\n" . "\r\n" . 'Сообщение: ' . "\r\n" . $sendermessage;

        $headers = 'From: no-reply@menzilgeo.az' . "\r\n" .
            'Reply-To: no-reply@menzilgeo.az' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        mail($to, $subject, $message, $headers);
        return $response->withRedirect($this->router->pathFor('elaqe'));
    }
}