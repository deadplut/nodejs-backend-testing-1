import { Post, PostsService } from "./posts.service";

describe("PostsService", () => {
  let postsService: PostsService;
  const post: Omit<Post, "id" | "date"> = {
    text: "Mocked post",
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: "Some pre-existing post" });
  });

  it("should add a new post", () => {
    const created_post = postsService.create(post);
    expect(postsService.find(created_post.id)).toEqual(created_post);
  });

  it("should find a post", () => {
    const created_post = postsService.create(post);
    expect(postsService.find(created_post.id)?.text).toEqual(created_post.text);
  });
});
