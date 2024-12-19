document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const resultContainer = document.getElementById("resultContainer");

    // Load the dataset
    fetch("./assets/data/movies_data.json")
        .then(response => response.json())
        .then(data => {
            searchInput.addEventListener("input", function () {
                const query = searchInput.value.toLowerCase();

                // Search the dataset for the 'title' column
                const result = data.find(item =>
                    item.title.toLowerCase().includes(query)
                );

                // Display relevant information
                if (result) {
                    resultContainer.innerHTML = `
                        <div>
                            <p><strong>Title:</strong> ${result.title}</p>
                            <p><strong>Proportion of women:</strong> ${result.proportion_actress.toFixed(3)}</p>
                            <p><strong>Female script:</strong> ${result.female_script.toFixed(3)}</p>
                            <p><strong>Bechdel Score:</strong> ${result.Bechdel_score}</p>
                            <p><strong>Inclusion score:</strong> ${result.incl_score.toFixed(3)}</p>
                            <p><strong>Rating:</strong> ${result.rating.toFixed(3)}</p>
                            <p><strong>Net revenue:</strong> ${result.Net_revenue.toFixed(3)}</p>
                            <p><strong>Success metric:</strong> ${result.SuccessMetric.toFixed(3)}</p>

                        </div>
                    `;
                } else {
                    resultContainer.innerHTML = "<p>Unfortunatly, we do not have enough informations of your go-to movie :(</p>";
                }
            });
        })
        .catch(error => {
            console.error("Error loading dataset:", error);
            resultContainer.innerHTML = "<p>Failed to load data.</p>";
        });
});
