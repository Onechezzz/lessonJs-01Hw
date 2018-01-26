document.write('<h1>Formule:</h1>');
    const koeficientA = prompt('Enter first coefficient:');

    const koeficientB = prompt('Enter second coefficient:');

    const koeficientC = prompt('Enter third coefficient:');

document.write('<h1>Finding a solution for: </h1>'+ koeficientA + 'x^2+' + koeficientB + 'x+' + koeficientC);
document.write('<br>');

    const D = koeficientB*koeficientB - (4 * koeficientA*koeficientC);
document.write('D=' + D);
    const x1 = (koeficientB*(-1) + Math.sqrt(D)) / koeficientA*koeficientA;
    const x2 = (koeficientB*(-1) - Math.sqrt(D)) / koeficientA*koeficientA;
document.write('<br>');
if (D < 0)
		document.write ('The equation has no roots.');
	else {
		if (D == 0)
			document.write ( 'The equation has one root:' + x1);
		else if  (D > 0)
		document.write ( 'The expression has 2 distinct real roots: x1= ' + x1 + ' x2= ' +x2);
	}
