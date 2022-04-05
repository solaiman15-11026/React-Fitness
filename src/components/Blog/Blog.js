import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='my-5'>
            <h1 className=' fw-bold'>Blogs</h1>
            <hr className='w-50 mx-auto mb-5' />
            <div className='container'>
                <div className='bg-light py-3 shadow p-3 mb-5 bg-body rounded'>
                    <h2 className='text-success fw-bold pb-2'>What is Context API ?? </h2>
                    <p className='fs-5'>A React app can use the React Context API to generate global variables that can be passed around.
                        This is an alternative to "prop drilling," which entails passing props from grandparent to child to parent and so on.
                        Context is also marketed as a simpler, lighter way to Redux state management. eact.create All you need is Context().
                        It will give you a customer and a provider. Provider is a component that provides the state to its children, as its name suggests.
                        It will include the "store" and serve as the parent of all components that may need it.</p>
                </div>
            </div>
            <div className='container'>
                <div className='bg-light py-3 shadow p-3 mb-5 bg-body rounded'>
                    <h2 className='text-success fw-bold pb-2'>What is Symantic Tag ?? </h2>
                    <p className='fs-5'>
                        Semantic HTML, also known as semantic markup, is HTML that adds meaning to a web page rather than merely making it look pretty.
                        Despite the fact that practically every HTML4 and HTML5 tag has semantic implications, some tags are primarily semantic.
                        The semantic meaning of the <span className='color'>&lt;b&gt;</span> and <span className='color'>&lt;i&gt;</span> tags, for example, has been redefined by HTML5.
                        The <span className='color'>&lt;b&gt;</span> tag has no special meaning; rather, the tagged content is usually shown in bold.
                        The <span className='color'>&lt;i&gt;</span> tag, likewise, does not impart additional importance or emphasis; rather, it defines text that is usually rendered in italics.
                        some Symantic is <span className='color'>&lt;abbr&gt;</span> , <span className='color'>&lt;blockquote&gt;</span> , <span className='color'>&lt;div&gt;</span> etc

                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;