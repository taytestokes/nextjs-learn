import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

const Blog = () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="hello" title="Hello Next.js"/>
            <PostLink id="learn" title="Learn Next.js"/>
            <PostLink id="deploy" title="Deploy apps with Zeit"/>
        </ul>
    </Layout>
);

export default Blog;