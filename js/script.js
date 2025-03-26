// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    const savedUsername = localStorage.getItem('finTrackUsername');
    const dashboard = document.getElementById('dashboard');
    const usernameModal = new bootstrap.Modal(document.getElementById('usernameModal'));
    
    if (savedUsername) {
        // Show dashboard with saved username
        document.getElementById('usernameDisplay').textContent = savedUsername;
        dashboard.style.display = 'grid';
        initializeCharts();
    } else {
        // Show username modal
        usernameModal.show();
    }
    
    // Save username button
    document.getElementById('saveUsernameBtn').addEventListener('click', function() {
        const usernameInput = document.getElementById('usernameInput').value.trim();
        if (usernameInput) {
            localStorage.setItem('finTrackUsername', usernameInput);
            document.getElementById('usernameDisplay').textContent = usernameInput;
            usernameModal.hide();
            dashboard.style.display = 'grid';
            initializeCharts();
        }
    });
});

// Initialize charts
function initializeCharts() {
    // Spending Overview Chart
    const spendingCtx = document.getElementById('spendingChart').getContext('2d');
    new Chart(spendingCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Income',
                data: [3200, 2900, 3500, 3800, 4000, 4200],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.3,
                fill: true
            }, {
                label: 'Expenses',
                data: [2200, 2400, 2600, 2800, 3000, 2456],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    // Category Chart
    const categoryCtx = document.getElementById('categoryChart').getContext('2d');
    new Chart(categoryCtx, {
        type: 'doughnut',
        data: {
            labels: ['Housing', 'Food', 'Transport', 'Entertainment', 'Shopping', 'Utilities'],
            datasets: [{
                data: [1200, 450, 300, 150, 200, 156],
                backgroundColor: [
                    '#6366f1',
                    '#10b981',
                    '#f59e0b',
                    '#8b5cf6',
                    '#ec4899',
                    '#3b82f6'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
}
