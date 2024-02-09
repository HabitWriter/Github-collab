export default function PageTwo() {
    return (
        <>
            <div className="body">
                <div className="body-card">
                    {/* Result Card */}
                    <div className="result-card">
                        <h2>Your Result</h2>
                        <div className="total-score">
                            <h4>76</h4>
                            <p>of 100</p>
                        </div>
                        <h3>Great!</h3>
                        <p>
                            You scored higher than 65% of people who have taken
                            these tests
                        </p>
                    </div>

                    {/* Summary Card */}
                    <div className="summary-card">
                        <h2>Summary</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
