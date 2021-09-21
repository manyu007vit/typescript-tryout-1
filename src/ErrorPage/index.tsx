

const ErrorPage = () => {
    return (
        <div className="sm:container w-full h-1/2 flex justify-start content-center items-center flex-col">
            <div className="text-center w-full h-auto text-4xl text-red-600 pt-20">
                Oopsyyyy! Path Not found
            </div>
            <div className="w-auto h-20 text-4xl pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
    )
}

export default ErrorPage