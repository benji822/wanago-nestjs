import { UpdatePostDto } from './dtos/updatePost.dto';
import { CreatePostDto } from './dtos/createPost.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Post from './post.entity';
import { Repository } from 'typeorm';
import PostNotFoundExeption from './exception/postNotFund.exception';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async getAllPosts() {
    return await this.postsRepository.find();
  }

  async getPostById(id: number) {
    const post = await this.postsRepository.findOneBy({
      id,
    });
    if (post) {
      return post;
    }
    throw new PostNotFoundExeption(id);
  }

  async createPost(post: CreatePostDto) {
    const newPost = await this.postsRepository.create(post);
    await this.postsRepository.save(newPost);
    return newPost;
  }

  async replacePost(post: UpdatePostDto, id: number) {
    console.log(post, id);

    await this.postsRepository.update(id, post);
    const updatedPost = await this.postsRepository.findOneBy({ id });
    if (updatedPost) {
      return updatedPost;
    }
    throw new PostNotFoundExeption(id);
  }

  async deletePost(id: number) {
    const deleteReponse = await this.postsRepository.delete(id);
    if (!deleteReponse.affected) {
      throw new PostNotFoundExeption(id);
    }
  }
}
