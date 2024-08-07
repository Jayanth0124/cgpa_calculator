function calculateCGPA() {
    // Simulate a delay for the calculation (remove if not needed)
    setTimeout(() => {
        const S = parseInt(document.getElementById('S').value, 10);
        const A = parseInt(document.getElementById('A').value, 10);
        const B = parseInt(document.getElementById('B').value, 10);
        const C = parseInt(document.getElementById('C').value, 10);
        const D = parseInt(document.getElementById('D').value, 10);
        const E = parseInt(document.getElementById('E').value, 10);

        // Define the points for each grade
        const points = {
            S: 10,
            A: 9,
            B: 8,
            C: 7,
            D: 6,
            E: 5
        };

        // Calculate total points
        const totalPoints = (S * points.S) + (A * points.A) + (B * points.B) +
                             (C * points.C) + (D * points.D) + (E * points.E);

        // Calculate total subjects
        const totalSubjects = S + A + B + C + D + E;

        // Calculate CGPA
        const cgpa = totalSubjects > 0 ? (totalPoints / totalSubjects).toFixed(2) : 0.00;

        // Display CGPA
        document.getElementById('cgpa-value').textContent = cgpa;
    }, 1000); // 1 second delay for simulation
}
