
import StudentInfo from './StudentInfo'
import Link from 'next/link';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <h1 className="text-4xl"> CPRG 306: Web Development 2 - Assignments</h1>
        </div>
        <StudentInfo/>
        
      </div>
      <nav className='flex items-center bg-gray-200 p-2'>
          <Link href="../week2" className="text-blue-500 font-bold hover:text-orange-500">week2</Link>
      </nav>
      <br></br>
      
      <nav className='flex items-center bg-gray-200 p-2'>
        <Link href="../week3" className="text-blue-500 font-bold hover:text-orange-500">week3</Link>
      </nav>
      <br></br>

      <nav className='flex items-center bg-gray-200 p-2'>
        <Link href="../week4" className="text-blue-500 font-bold hover:text-orange-500">week4</Link>
      </nav>
      <br></br>

      <nav className='flex items-center bg-gray-200 p-2'>
        <Link href="../week5" className="text-blue-500 font-bold hover:text-orange-500">week5</Link>
      </nav>
      <br></br>
      
      <nav className='flex items-center bg-gray-200 p-2'>
        <Link href="../week6" className="text-blue-500 font-bold hover:text-orange-500">week6</Link>
      </nav>
      <br></br>

      <nav className='flex items-center bg-gray-200 p-2'>
        <Link href="../week7" className="text-blue-500 font-bold hover:text-orange-500">week7</Link>
      </nav>
      <br></br>

      <nav className='flex items-center bg-gray-200 p-2'>
        <Link href="../week8" className="text-blue-500 font-bold hover:text-orange-500">week8</Link>
      </nav>
    </main>
  );
}
