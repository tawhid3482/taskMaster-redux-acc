const PostCard = ({ post }) => {
  return (
    <div className="p-5 bg-slate-300 border border-green-500 ">
    
       <div className=" ">
       <h1>Tawhidul Islam</h1>
        <p className="">{post?.body}</p>
      
      <div className=""></div>
       </div>
    </div>
  );
};

export default PostCard;
