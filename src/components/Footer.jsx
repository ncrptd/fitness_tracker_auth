
function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-2 text-center relative bottom-0 left-0 right-0">
            <div className="flex justify-center items-center">
                <a
                    href="https://github.com/ncrptd/fitness_tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition duration-300"
                >

                    GitHub
                </a>
            </div>
            <p className="mt-2">© {new Date().getFullYear()} Rockey Biswas</p>
        </footer>
    );
}

export default Footer;
