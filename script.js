function calculateCGPA() {
    const S = parseInt(document.getElementById('sgrade').value, 10) || 0;
    const A = parseInt(document.getElementById('agrade').value, 10) || 0;
    const B = parseInt(document.getElementById('bgrade').value, 10) || 0;
    const C = parseInt(document.getElementById('cgrade').value, 10) || 0;
    const D = parseInt(document.getElementById('dgrade').value, 10) || 0;
    const E = parseInt(document.getElementById('egrade').value, 10) || 0;

    const points = {
        S: 10,
        A: 9,
        B: 8,
        C: 7,
        D: 6,
        E: 5
    };

    const totalPoints = (S * points.S) + (A * points.A) + (B * points.B) +
                        (C * points.C) + (D * points.D) + (E * points.E);

    const totalSubjects = S + A + B + C + D + E;

    const cgpa = totalSubjects > 0 ? (totalPoints / totalSubjects).toFixed(2) : 0.00;

    document.getElementById('cgpa-value').textContent = cgpa;
}

// Set initial values to 0 on page load
window.onload = function() {
    document.getElementById('sgrade').value = 0;
    document.getElementById('agrade').value = 0;
    document.getElementById('bgrade').value = 0;
    document.getElementById('cgrade').value = 0;
    document.getElementById('dgrade').value = 0;
    document.getElementById('egrade').value = 0;
}
