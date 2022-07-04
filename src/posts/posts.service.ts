import { UpdatePostDto } from './../dtos/updatePost.dto';
import { CreatePostDto } from './../dtos/createPost.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getAllPosts() {
    return 'get all posts';
  }

  getPostById(id: number) {
    return 'post with id';
  }

  createPost(post: CreatePostDto) {
    return 'create post';
  }

  replacePost(body: UpdatePostDto, id: number) {
    return 'update post with id';
  }

  deletePost(id: number) {
    return 'delete post with id';
  }
}
