import '../index.css'

function Navbar() {
    return (
        <nav className='text-white justify-between flex mt-5'>
            <h1>My Portofolio</h1>
            <ul className='flex gap-5'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
