import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='my-5'>
            <h1 className=' fw-bold mb-4'>Blogs</h1>
            <div className='container'>
                <div className='bg-light py-3 shadow p-3 mb-5 bg-body rounded'>
                    <h2 className='text-primary fw-bold pb-2'>What is Context API ? </h2>
                    <p className='fs-5 text'>
                        Context APT is a new feature in React 16.3 that allows you to easily and lightly communicate data across the entire application. A React app can use the React Context AP to generate global variables that can be passed around. This is a replacement for "prop drilling," which involves passing props from grandparent to child to parent, and so on.
                        Context is also marketed as a simpler, lighter way to Redux state management.
                    </p>
                </div>
            </div>
            <div className='container'>
                <div className='bg-light py-3 shadow p-3 mb-5 bg-body rounded'>
                    <h2 className='text-primary fw-bold pb-2'>What is Symantic Tag ? </h2>
                    <p className='fs-5 text'>
                        Semantic HTML elements are those that express their meaning in a way that is both human and machine readable.
                        Headers, footers, and articles are examples of such elements.Despite the fact that practically every HTML4 and HTML5 tag has semantic implications, some tags are primarily semantic.
                        Are all regarded semantic because they precisely. Describe the element's purpose and the type of content it contains.

                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;