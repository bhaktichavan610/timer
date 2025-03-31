// Function to simulate data fetching
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Fetched data successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 1000); // Simulating 1s delay
    });
}

// Async function to handle fetchData
async function fetchDataHandler() {
    try {
        let result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

// Call the function to test
fetchDataHandler();
