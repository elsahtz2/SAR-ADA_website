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
                            <p><strong style="font-size: 1em;">Title:</strong> ${result.title}</p>
                            <p><strong style="font-size: 1em;">Inclusion Score:</strong> ${result.incl_score.toFixed(4)}</p>
                            <span style="color: black;">Proportion of Actress:</span> ${result.proportion_actress.toFixed(4)}</p>
                            <p><span style="color: black;">Share of Women Script:</span> ${result.female_script.toFixed(4)}</p>
                            <p><span style="color: black;">Bechdel Score:</span> ${result.Bechdel_score}</p>
                            <p><strong style="font-size: 1em;">Success Score:</strong> ${result.SuccessMetric.toFixed(4)}</p>
                            <p><span style="color: black;">Rating:</span> ${result.rating.toFixed(4)}</p>
                            <p><span style="color: black;">Net revenue:</span> $${Number(result.Net_revenue).toLocaleString('en-US').replace(/,/g, ' ')}</p>
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
