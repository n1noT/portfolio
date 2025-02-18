import Link from 'next/link';

export default function Cv() {
    return (
        <Link className="absolute top-0 right-0 w-24 h-24 rounded-full flex items-center justify-center p-8 m-8 bg-accent text-4xl animate-bounce" href="/cv">
            <div className='animate-spinSlow shadow-rotation w-24 h-24 absolute rounded-full'></div>
            <p className='text-lg'><span className='text-4xl font-bold'>CV</span></p>
        </Link>
    )
};