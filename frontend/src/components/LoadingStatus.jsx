function LoadingStatus({theme}){
    return(
        <div className="loading-container">
            <h2>Generating your {theme} story</h2>
            <div className="loading-animation">
                <div className="spinner"></div>
                <p className="loading-info">Please wait while generating your story ...</p>
            </div>
        </div>
    )
}

export default LoadingStatus;