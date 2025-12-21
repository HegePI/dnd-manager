export const GET = () =>
	new Response(JSON.stringify({ ready: true }), {
		headers: { 'Content-Type': 'application/json' },
		status: 200
	});
