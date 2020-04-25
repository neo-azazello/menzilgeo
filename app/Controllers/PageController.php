<?php

namespace App\Controllers;

use App\Models\PageModel;
use Slim\Http\Request;
use Slim\Http\Response;

class PageController extends BaseController
{
    public function anaSehife(Request $request, Response $response)
    {
        $data = PageModel::where(['pageslug'=>'home'])->first();
        return $this->container->view->render($response, 'pages/home.twig', compact('data'));
    }

    public function haqqimizda(Request $request, Response $response)
    {
        $data = PageModel::where(['pageslug'=>'shirket'])->first();
        return $this->container->view->render($response, 'pages/haqqimizda/haqqimizda.twig', compact('data'));
    }

    public function ustunluklerimiz(Request $request, Response $response)
    {
        $data = PageModel::where(['pageslug'=>'ustunluklerimiz'])->first();
        return $this->container->view->render($response, 'pages/haqqimizda/ustunluklerimiz.twig', compact('data'));
    }

    public function lisenziya(Request $request, Response $response)
    {
        $data = PageModel::where(['pageslug'=>'lisenziya'])->first();
        return $this->container->view->render($response, 'pages/haqqimizda/lisenziya.twig', compact('data'));
    }

    public function geodeziya(Request $request, Response $response)
    {
        $data = PageModel::where(['pageslug'=>'geodeziya'])->first();
        return $this->container->view->render($response, 'pages/xidmetlerimiz/geodeziya.twig', compact('data'));
    }

    public function geofiziki(Request $request, Response $response)
    {
        $data = PageModel::where(['pageslug'=>'geofiziki'])->first();
        return $this->container->view->render($response, 'pages/xidmetlerimiz/geofiziki.twig', compact('data'));
    }

    public function geoloji(Request $request, Response $response)
    {
        $data = PageModel::where(['pageslug'=>'geoloji'])->first();
        return $this->container->view->render($response, 'pages/xidmetlerimiz/geoloji.twig', compact('data'));
    }

    public function hidrogeoloji(Request $request, Response $response)
    {
        $data = PageModel::where(['pageslug'=>'hidrogeoloji'])->first();
        return $this->container->view->render($response, 'pages/xidmetlerimiz/hidrogeoloji.twig', compact('data'));
    }

    public function qruntlar(Request $request, Response $response)
    {
        $data = PageModel::where(['pageslug'=>'qruntlar'])->first();
        return $this->container->view->render($response, 'pages/xidmetlerimiz/qruntlar.twig', compact('data'));
    }

    public function layihelerimiz(Request $request, Response $response)
    {
        $data = PageModel::where(['pageslug'=>'layihelerimiz'])->first();
        return $this->container->view->render($response, 'pages/layihelerimiz.twig', compact('data'));
    }

    public function elaqe(Request $request, Response $response)
    {
        $data = PageModel::where(['pageslug'=>'layihelerimiz'])->first();
        return $this->container->view->render($response, 'pages/elaqe.twig', compact('data'));
    }
}