import Link from "next/link";

export default function StudentInfo() 
{
    return(
        <div>
            <h1>My Student Info</h1>
            <p>Name: Khang Trinh</p>
            <p>Course section: CPRG 306 E</p>
            <nav>
                <Link href="https://github.com/khangtrinh1304/cprg306-assignments">https://github.com/khangtrinh1304/cprg306-assignments</Link>
            </nav>
        </div>
    );
}
