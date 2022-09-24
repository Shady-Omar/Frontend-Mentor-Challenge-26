

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            label: "$",
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: [
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)'
            ],
            borderRadius: ["5","5","5","5","5","5","5"],
            borderSkipped: false,
            hoverBackgroundColor: ["hsl(10, 79%, 65%, 0.8)",
                                            "hsl(10, 79%, 65%, 0.8)", 
                                            "hsl(186, 34%, 60%, 0.8)", 
                                            "hsl(10, 79%, 65%, 0.8)", 
                                            "hsl(10, 79%, 65%, 0.8)",
                                            "hsl(10, 79%, 65%, 0.8)", 
                                            "hsl(10, 79%, 65%, 0.8)"],
            borderWidth: 1
        }]
    },
    options: {
        legend: { 
            display: false 
        },
        scales: {
            x: {
                
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        }, 
        datasets: [{
            label: {
                display: false
            }
        }],
        plugins: {
            legend: {
                display: false
            }
        },
        aspectRatio: "2"
    }
    }
);