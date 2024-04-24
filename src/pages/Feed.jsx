import { useForm } from "react-hook-form";
import PostCard from "../components/PostCard";
import {
  useGetPostByIdQuery,
  useGetPostsQuery,
  useGetUserQuery,
} from "../redux/features/api/baseApi";

const Feed = () => {
    const { register, handleSubmit } = useForm();

  //   const { data: posts, isError, error, isLoading } = useGetPostsQuery();
  //    const { data: user, isError, error, isLoading } = useGetUserQuery();
  const { data: post, isError, error, isLoading } = useGetPostByIdQuery(1);
  if (isLoading) {
    return <p className="text-red-600 text-center text-3xl">Loading..</p>;
  }

  const onSubmit = (data)=>{
    console.log(data)
  }

  return (
    <div>
      <p>Feed</p>
      <div className="flex gap-2">
        <input className="w-full" type="text" {...register("name")} />
        <button onClick={()=>handleSubmit(onSubmit)} className="btn btn-danger">Post</button>
      </div>
      <div className=" grid grid-cols-3 gap-3  ">
        {/* {postID?.map((post) => ( */}
        <PostCard key={post.id} post={post} />
        {/* ))} */}
      </div>
    </div>
  );
};

export default Feed;
