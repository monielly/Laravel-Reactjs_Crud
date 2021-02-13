<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use App\Http\Resources\Post as PostResource;
use App\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PostResource::collection(
            DB::select('SELECT * FROM posts')
        );

        // Use model to retrieve data from db
        // return PostResource::collection(
        //     Post::all()
        // );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'description' => 'required'
        ]);

				if($validated){

					$post = new Post([
            'title' => $request->title,
            'description' => $request->description
						]);
						$post->save();
						
						$req_title = $request->title;
						$req_desc = $request->description;

						return response()->json([
								'data' => 'Post created!',
								'request' => [$req_title, $req_desc]
						]);

				}else{
						return response()->json([
								'data' => 'Failed to add Post.'
						]);
				}
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return new PostResource(Post::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required'
        ]);

        $post = Post::findOrFail($id);
        $post->title = $request->title;
        $post->description = $request->description;
        $post->save();

        return response()->json([
            'data' => 'Post updated!'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();

        return response()->json([
            'data' => 'Post deleted!'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function test()
    {
        $test = DB::select('SELECT * FROM posts');

        return response()->json([
            'data' => 'Post deleted!',
            'test' => $test
        ]);
    }

    public function submit(Request $request){

        $title = $request->title;
        $description = $request->description;

				$fields = [$title, $description];

        $post = new Post([
					'title' => $title,
					'description' => $description
				]);
				$post->save();

        return response()->json([
            'response' => 'Post Saved!',
						'post fields' => $fields,
						'post db' => $post
        ]);

    }
}
