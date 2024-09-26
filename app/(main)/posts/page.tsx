import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";
import PostsTable from "@/components/posts/PostsTable";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Go back" link="/" />
      <PostsTable />
      <PostsPagination />
    </>
  );
};

export default PostsPage;
