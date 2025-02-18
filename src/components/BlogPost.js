import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { contentfulClient } from "../utils/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

function BlogPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { path } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'blogPost',
          'fields.path': path
        });

        if (response.items.length > 0) {
          setPost(response.items[0]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [path]);

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
      [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
      [MARKS.CODE]: (text) => (
        <code className="bg-gray-100 rounded-md px-2 py-1 font-mono text-sm">{text}</code>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-3xl font-bold mb-4 mt-6">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-2xl font-bold mb-3 mt-5">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-xl font-bold mb-3 mt-4">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc ml-6 mb-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal ml-6 mb-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-1">{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="my-8 border-t border-gray-300" />,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url, title, description } = node.data.target.fields;
        return (
          <img
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        );
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          {children}
        </a>
      ),
    },
  };

  if (loading) {
    return (
      <div className='bg-repeat min-h-screen' style={{ backgroundImage: 'url(/grid_background.webp)' }}>
        <div className="container mx-auto px-4 py-8">
          <p className="text-center">Loading...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className='bg-repeat min-h-screen' style={{ backgroundImage: 'url(/grid_background.webp)' }}>
        <div className="container mx-auto px-4 py-8">
          <p className="text-center">Post not found</p>
          <Link to="/blog" className="text-blue-500 hover:text-blue-700 underline text-center block mt-4">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-repeat min-h-screen' style={{ backgroundImage: 'url(/grid_background.webp)' }}>
      <div className="container mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
          <Link to="/blog" className="text-blue-500 hover:text-blue-700 underline block">
            ← Back to Blog
          </Link>
          <div className='grid max-sm:grid-cols-1 grid-cols-3 items-center gap-6 max-sm:gap-0 max-sm:pb-6'>
            <div className='relative col-span-2 mb-8 ml-4 max-sm:order-2'>
              <img src='/assets/img/nerd.png' className='w-16 absolute -left-4 top-3/4' />
              <h1 className="relative text-4xl mb-4 py-4 px-12 bg-white border border-stone-600 rounded-3xl font-bold before:content-[''] before:absolute before:left-6 before:-bottom-2 before:w-4 before:h-4 before:bg-white before:border-b before:border-r before:border-stone-600 before:rotate-45">{post.fields.title}</h1>
            </div>
            {post.fields.image && (
              <img
                src={post.fields.image.fields.file.url}
                alt={post.fields.title}
                className="min-w-full h-44 object-cover rounded-lg mb-6 max-sm: order-1"
              />
            )}
          </div>
          <div className="prose max-w-none">
            <p className='text-gray-400 font-bold italic'>
              Last updated on {new Date(post.sys.updatedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            {documentToReactComponents(post.fields.blogText, options)}
          </div>
          <Link to="/blog" className="text-blue-500 hover:text-blue-700 underline block mt-8">
            ← Back to Blog
          </Link>
        </article>
      </div>
    </div>
  );
}

export default BlogPost; 