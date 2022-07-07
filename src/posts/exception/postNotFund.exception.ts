import { NotFoundException } from '@nestjs/common';

class PostNotFoundExeption extends NotFoundException {
  constructor(postId: number) {
    super(`Post with id ${postId} not found`);
  }
}

export default PostNotFoundExeption;
