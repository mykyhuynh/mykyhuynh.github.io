import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { contentfulClient } from "../utils/contentful";

function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch blog posts from Contentful
        const fetchPosts = async () => {
            try {
                const response = await contentfulClient.getEntries({
                    content_type: 'blogPost',
                    order: '-sys.createdAt'
                });
                setPosts(response.items);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className='bg-repeat min-h-screen' style={{ backgroundImage: 'url(/grid_background.webp)' }}> 
            <div className="container mx-auto px-4 py-8 max-w-screen-xl">
                <h1 className="text-4xl font-bold mb-8 text-center">what's on my mind?</h1>
                
                {loading ? (
                    <p className="text-center">Loading posts...</p>
                ) : posts.length === 0 ? (
                    <div className="flex justify-center items-center min-h-[300px] bg-white rounded-xl">
                        <p className="text-gray-500 text-lg">Nothing... yet ;)</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <div key={post.sys.id} className="bg-white border border-stone-700 rounded-lg p-6 hover:border-red-600">
                                <Link to={`/blog/${post.fields.path}`}>
                                    {post.fields.image && (
                                        <img 
                                            src={post.fields.image.fields.file.url} 
                                            alt={post.fields.title}
                                            className="w-full h-48 object-cover rounded-lg mb-4"
                                        />
                                    )}
                                    <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
                                        {post.fields.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4">
                                        {post.fields.description}
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Blog;