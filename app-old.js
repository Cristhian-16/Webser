import http from 'node:http';

const server = http.createServer((req, res) => {
	/* Tipo de solicitud */
	res.writeHead(200, { 'Content-Type': 'application/json' });
	/* Data */

	const persona = {
		id: 1,
		name: 'Cristhian',
	};

	res.write(JSON.stringify(persona));
	/* Termina la respuesta */
	res.end();
});

/* Escuchas el puerto */
server.listen(3000);
